/**
 * Scrolling utilities for the application
 * Includes functions for scroll snap and draggable horizontal scrollers
 */

/**
 * Enables scroll snap for fullscreen sections
 */
export const enableScrollSnap = () => {
  // Delay added to ensure the DOM is fully loaded before applying scroll snap
  setTimeout(() => {
    document.documentElement.classList.add('has-scroll-snap');
    document.body.classList.add('has-scroll-snap');
  }, 100);
};

/**
 * Disables scroll snap for fullscreen sections
 */
export const disableScrollSnap = () => {
  document.documentElement.classList.remove('has-scroll-snap');
  document.body.classList.remove('has-scroll-snap');
};

/**
 * Scrolls to a specific section by ID
 * @param id - The ID of the section to scroll to
 * @param smooth - Whether to use smooth scrolling
 */
export const scrollToSection = (id: string, smooth: boolean = true) => {
  const element = document.getElementById(id);
  if (element) {
    // Special handling for the Call-To-Action section to ensure the footer is visible
    if (id === 'cta') {
      const scrollPosition = element.offsetTop;
      window.scrollTo({
        top: scrollPosition,
        behavior: smooth ? 'smooth' : 'auto'
      });
    } else {
      element.scrollIntoView({
        behavior: smooth ? 'smooth' : 'auto',
        block: 'start'
      });
    }
  }
};

/**
 * Sets up a draggable horizontal scroller for a specified container
 * @param containerId - The ID of the container element
 * @returns A cleanup function to remove event listeners
 */
export const setupDraggableScroller = (containerId: string): (() => void) => {
  const container = document.getElementById(containerId);
  if (!container) return () => {};

  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  // Mouse event handlers for draggable scrolling
  const mouseDownHandler = (e: MouseEvent) => {
    isDown = true;
    container.classList.add('grabbing');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    e.preventDefault();
  };

  const mouseLeaveHandler = () => {
    isDown = false;
    container.classList.remove('grabbing');
  };

  const mouseUpHandler = () => {
    isDown = false;
    container.classList.remove('grabbing');
  };

  const mouseMoveHandler = (e: MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    container.scrollLeft = scrollLeft - walk;
  };

  // Touch event handlers for draggable scrolling
  const touchStartHandler = (e: TouchEvent) => {
    isDown = true;
    container.classList.add('grabbing');
    startX = e.touches[0].pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  };

  const touchEndHandler = () => {
    isDown = false;
    container.classList.remove('grabbing');
  };

  const touchMoveHandler = (e: TouchEvent) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    container.scrollLeft = scrollLeft - walk;
  };

  // Attach event listeners for mouse and touch events
  container.addEventListener('mousedown', mouseDownHandler);
  container.addEventListener('mouseleave', mouseLeaveHandler);
  container.addEventListener('mouseup', mouseUpHandler);
  container.addEventListener('mousemove', mouseMoveHandler);

  container.addEventListener('touchstart', touchStartHandler);
  container.addEventListener('touchend', touchEndHandler);
  container.addEventListener('touchmove', touchMoveHandler);

  // Cleanup function to remove event listeners when not needed
  return () => {
    container.removeEventListener('mousedown', mouseDownHandler);
    container.removeEventListener('mouseleave', mouseLeaveHandler);
    container.removeEventListener('mouseup', mouseUpHandler);
    container.removeEventListener('mousemove', mouseMoveHandler);

    container.removeEventListener('touchstart', touchStartHandler);
    container.removeEventListener('touchend', touchEndHandler);
    container.removeEventListener('touchmove', touchMoveHandler);
  };
};

/**
 * Toggles scroll snap based on current screen width
 */
export const toggleScrollSnap = () => {
  if (window.innerWidth >= 1024) {
    enableScrollSnap();
  } else {
    disableScrollSnap();
  }
};

/**
 * Sets up scroll listeners and updates on window resize
 * @returns A cleanup function to remove event listeners
 */
export const setupScrollListeners = (): (() => void) => {
  // Initial setup to determine if scroll snap should be enabled based on screen size
  toggleScrollSnap();

  // Adjust scroll snap settings when the window is resized
  const handleResize = () => {
    toggleScrollSnap();
  };

  window.addEventListener('resize', handleResize);

  // Cleanup function to remove resize event listener and disable scroll snap
  return () => {
    window.removeEventListener('resize', handleResize);
    disableScrollSnap();
  };
}; 