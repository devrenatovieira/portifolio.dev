const revealItems = document.querySelectorAll("section, .project, .skills article");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => {
  item.classList.add("reveal");
  observer.observe(item);
});

const navLinks = document.querySelectorAll(".site-nav a");
const sections = [...navLinks].map((link) =>
  document.querySelector(link.getAttribute("href"))
);

window.addEventListener("scroll", () => {
  const offset = window.scrollY + 120;
  sections.forEach((section, index) => {
    if (!section) return;
    const isActive =
      offset >= section.offsetTop &&
      offset < section.offsetTop + section.offsetHeight;
    navLinks[index].classList.toggle("active", isActive);
  });
});

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const formFeedback = document.querySelector(".form-feedback");
let statusTimeout;
const themeToggle = document.querySelector(".theme-toggle");
const applyTheme = (theme) => {
  document.body.dataset.theme = theme;
  localStorage.setItem("theme", theme);
};

const initTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    applyTheme(savedTheme);
    return;
  }
  applyTheme("dark");
};

initTheme();

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = document.body.dataset.theme === "dark" ? "dark" : "light";
    applyTheme(current === "dark" ? "light" : "dark");
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);

    try {
      const response = await fetch(contactForm.action, {
        method: contactForm.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        contactForm.reset();
        formStatus.textContent = "Mensagem enviada com sucesso!";
        contactForm.classList.add("is-celebrating");
        setTimeout(() => {
          contactForm.classList.remove("is-celebrating");
        }, 2300);
      } else {
        formStatus.textContent =
          "Nao foi possivel enviar agora. Tente novamente.";
      }
    } catch (error) {
      formStatus.textContent =
        "Erro de conexao. Verifique sua internet e tente novamente.";
    }

    clearTimeout(statusTimeout);
    formStatus.classList.add("is-visible");
    if (formFeedback) {
      formFeedback.classList.remove("is-visible");
      void formFeedback.offsetWidth;
      formFeedback.classList.add("is-visible");
    }
    statusTimeout = setTimeout(() => {
      formStatus.classList.remove("is-visible");
      if (formFeedback) {
        formFeedback.classList.remove("is-visible");
      }
      formStatus.textContent = "";
    }, 1000);
  });
}

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  if (event.ctrlKey && ["u", "s", "p"].includes(key)) {
    event.preventDefault();
  }
  if (event.ctrlKey && event.shiftKey && ["i", "j", "c"].includes(key)) {
    event.preventDefault();
  }
  if (key === "f12") {
    event.preventDefault();
  }
});

const canvas = document.querySelector("#neural-canvas");
const isMobile = window.matchMedia("(max-width: 900px)").matches;

if (canvas && !isMobile) {
  const ctx = canvas.getContext("2d");
  const particleCount = 90;
  const particles = [];
  const stars = [];
  const asteroids = [];
  const mouse = { x: 0, y: 0, active: false };
  const attractor = { x: 0, y: 0, ttl: 0 };

  const resizeCanvas = () => {
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
  };

  const getColors = () => {
    const styles = getComputedStyle(document.body);
    return {
      line: styles.getPropertyValue("--canvas-line").trim(),
      dot: styles.getPropertyValue("--canvas-dot").trim(),
    };
  };

  const spawnParticles = () => {
    particles.length = 0;
    for (let i = 0; i < particleCount; i += 1) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: 2 + Math.random() * 2,
      });
    }
  };

  const spawnStars = () => {
    stars.length = 0;
    const starCount = Math.max(80, Math.floor(window.innerWidth / 8));
    for (let i = 0; i < starCount; i += 1) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 1.4 + 0.3,
        alpha: Math.random() * 0.6 + 0.2,
      });
    }
  };

  const spawnAsteroids = () => {
    asteroids.length = 0;
    for (let i = 0; i < 6; i += 1) {
      asteroids.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() * 0.35 + 0.1) * (Math.random() > 0.5 ? 1 : -1),
        vy: (Math.random() * 0.25 + 0.08) * (Math.random() > 0.5 ? 1 : -1),
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.4 + 0.2,
      });
    }
  };

  const draw = () => {
    const { line, dot } = getColors();
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    stars.forEach((star) => {
      ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    asteroids.forEach((asteroid) => {
      asteroid.x += asteroid.vx;
      asteroid.y += asteroid.vy;
      if (asteroid.x < -50) asteroid.x = window.innerWidth + 50;
      if (asteroid.x > window.innerWidth + 50) asteroid.x = -50;
      if (asteroid.y < -50) asteroid.y = window.innerHeight + 50;
      if (asteroid.y > window.innerHeight + 50) asteroid.y = -50;

      ctx.strokeStyle = `rgba(255, 255, 255, ${asteroid.alpha})`;
      ctx.lineWidth = asteroid.size;
      ctx.beginPath();
      ctx.moveTo(asteroid.x, asteroid.y);
      ctx.lineTo(asteroid.x - asteroid.vx * 12, asteroid.y - asteroid.vy * 12);
      ctx.stroke();
    });

    for (let i = 0; i < particles.length; i += 1) {
      const p = particles[i];

      if (attractor.ttl > 0) {
        const dx = attractor.x - p.x;
        const dy = attractor.y - p.y;
        const dist = Math.hypot(dx, dy) || 1;
        p.vx += (dx / dist) * 0.018;
        p.vy += (dy / dist) * 0.018;
      }

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < -50 || p.x > window.innerWidth + 50) p.vx *= -1;
      if (p.y < -50 || p.y > window.innerHeight + 50) p.vy *= -1;

      ctx.fillStyle = dot;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();

      for (let j = i + 1; j < particles.length; j += 1) {
        const q = particles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 140) {
          ctx.strokeStyle = line;
          ctx.lineWidth = 1 - distance / 160;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }

      if (mouse.active) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 180) {
          ctx.strokeStyle = line;
          ctx.lineWidth = 1 - distance / 200;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    }

    if (attractor.ttl > 0) {
      attractor.ttl -= 1;
    }

    requestAnimationFrame(draw);
  };

  window.addEventListener("resize", () => {
    resizeCanvas();
    spawnParticles();
    spawnStars();
    spawnAsteroids();
  });

  window.addEventListener("pointermove", (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    mouse.active = true;
  });

  window.addEventListener("pointerleave", () => {
    mouse.active = false;
  });

  window.addEventListener("dblclick", (event) => {
    attractor.x = event.clientX;
    attractor.y = event.clientY;
    attractor.ttl = 120;

    for (let i = 0; i < 2; i += 1) {
      particles.push({
        x: event.clientX + (Math.random() - 0.5) * 20,
        y: event.clientY + (Math.random() - 0.5) * 20,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: 2.5 + Math.random() * 1.5,
      });
    }
  });

  resizeCanvas();
  spawnParticles();
  spawnStars();
  spawnAsteroids();
  draw();
}
