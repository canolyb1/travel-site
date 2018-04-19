import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor() {
    this.header = $('.site-header');
    this.trigger = $('.large-hero__title');
    this.createHeaderWaypoint();
    // Grab all page sections.
    this.pageSections = $('.page-section');
    this.headerLinks = $('.primary-nav a');
    this.createSectionWaypoints();
    this.addSmoothScrolling();
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
  }

  createHeaderWaypoint() {
    new Waypoint({
      element: this.trigger[0], // jquery object, 0 is the DOM element.
      handler: (direction) => {
        if (direction === 'down') {
          this.header.addClass('site-header--dark');
        } else {
          this.header.removeClass('site-header--dark');
        }
      }
    });
  }

  createSectionWaypoints() {
    this.pageSections.each((i, pageSection) => {
      new Waypoint({
        element: pageSection,
        handler: (direction) => {
          if (direction === 'down') {
            const matchingHeaderLink = pageSection.dataset.matchingLink;
            this.headerLinks.removeClass('is-current-link');
            $(matchingHeaderLink).addClass('is-current-link');
          }
        },
        offset: "18%"
      });
      new Waypoint({
        element: pageSection,
        handler: (direction) => {
          if (direction === 'up') {
            const matchingHeaderLink = pageSection.dataset.matchingLink;
            this.headerLinks.removeClass('is-current-link');
            $(matchingHeaderLink).addClass('is-current-link');
          }
        },
        offset: "-40%"
      });
    });
    //Create one waypoint to remove the active link class once you scroll past our-beginning
    new Waypoint({
      element: $('#our-beginning')[0],
      handler: (direction) => {
        if (direction === 'up') {
          this.headerLinks.removeClass('is-current-link');
        }
      },
      offset: "18%"
    });
  }
}

export default StickyHeader;