const SkillCard = ({ skill }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const Icon = skill.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const start = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const value = Math.floor(progress * skill.level);
      setCount(value);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isVisible, skill.level]);

  // circle setup
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (count / 100) * circumference;

  return (
    <div ref={cardRef} className="skill-card">
      <div className="skill-progress-wrapper">
        <svg className="progress-ring" width="160" height="160">
          <circle
            className="progress-ring-bg"
            stroke={`${skill.color}30`}
            strokeWidth="10"
            fill="transparent"
            r={radius}
            cx="80"
            cy="80"
          />
          <circle
            className="progress-ring-circle"
            stroke={skill.color}
            strokeWidth="10"
            fill="transparent"
            r={radius}
            cx="80"
            cy="80"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: offset,
              transition: "stroke-dashoffset 0.3s ease-out",
            }}
          />
        </svg>
        <div className="skill-icon-center">
          <Icon size={60} color={skill.color} />
          <span className="skill-percent">{count}%</span>
        </div>
      </div>
      <h3 className="skill-name">{skill.name}</h3>
    </div>
  );
};
