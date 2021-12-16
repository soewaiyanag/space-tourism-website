export function bgLazyLoad(element, classNames) {
  const sm = 640;
  const md = 768;
  const lg = 1024;
  const triggerClass = () => {
    if (window.innerWidth < sm && window.innerWidth > 0) {
      element.classList.add(classNames[0]);
    } else if (window.innerWidth < md && window.innerWidth > sm) {
      element.classList.add(classNames[1]);
    } else if (window.innerWidth < lg && window.innerWidth > md) {
      element.classList.add(classNames[2]);
    }
  };

  window.addEventListener("DOMContentLoaded", function () {
    triggerClass();
  });

  window.addEventListener("resize", function () {
    triggerClass();
  });
}
