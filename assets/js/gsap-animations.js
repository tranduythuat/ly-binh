// Không dùng export để hỗ trợ chạy bằng script thuần
function gsapFlipIn(selector) {
  gsap.utils.toArray(selector).forEach((el) => {
    gsap.to(el, {
      rotateY: 0,
      scale: 1,
      filter: "brightness(1)",
      opacity: 1,
      duration: 1.4,
      ease: "back.out(1.5)",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });
}
function gsapFadeIn(selector) {
  gsap.utils.toArray(selector).forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });
}

function gsapFadeRight(selector) {
  gsap.utils.toArray(selector).forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, x: -120 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });
}

function gsapFadeLeft(selector) {
  gsap.utils.toArray(selector).forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, x: 120 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });
}



function gsapFadeUp(selector) {
  gsap.utils.toArray(selector).forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 120 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });
}

function gsapFadeDown(selector) {
  gsap.utils.toArray(selector).forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: -120 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });
}

function gsapFlipVerticalLeft(selector) {
  gsap.utils.toArray(selector).forEach((el) => {
    gsap.from(el, {
      rotateY: -180,
      scale: 0.8,
      opacity: 0,
      duration: 2,
      ease: "back.out(1.2)",
      transformOrigin: "center center",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });
}

function gsapRotateBottomLeft(selector) {
  gsap.utils.toArray(selector).forEach((el) => {
    gsap.from(el, {
      rotation: -90,
      scale: 0.8,
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.2)",
      transformOrigin: "left bottom",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });
}

function gsapRotateBottomRight(selector) {
  gsap.utils.toArray(selector).forEach((el) => {
    gsap.from(el, {
      rotation: 90,
      scale: 0.8,
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.2)",
      transformOrigin: "right bottom",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });
}

function gsapRollInLeft(selector) {
  gsap.utils.toArray(selector).forEach((el) => {
    gsap.from(el, {
      rotation: -360,
      scale: 0.8,
      x: -800,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.2)",
      transformOrigin: "center center",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });
}

function gsap_rotate_bl__float(selector) {
  gsap.utils.toArray(selector).forEach((el) => {
    gsap.from(el, {
      rotation: -90,
      scale: 0.8,
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.2)",
      transformOrigin: "left bottom",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      onComplete: () => {
        gsap.to(el, {
          y: -15,
          rotation: 3,
          duration: 1.5,
          ease: "sine.inOut",
          repeat: -1,     // lặp vô hạn
          yoyo: true      // quay lại vị trí ban đầu
        });
      }
    });
  });
}