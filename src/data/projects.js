// Project data for WorkSection. `projects` is ordered: the first
// INITIAL_COUNT entries show by default, the rest sit behind "Show all".

export const featured = {
  tag: "ML · Data Engineering · F1",
  title: "F1 Analytics Dashboard",
  description:
    "End-to-end race prediction and telemetry platform trained on 500K+ data points across 10+ seasons and 70+ engineered features. XGBoost and TensorFlow models feed a React and D3.js dashboard and a FastF1-powered live race replay.",
  tech: ["XGBoost", "TensorFlow", "Spark", "D3.js", "FastF1", "React"],
  github: "https://github.com/vatsalp2008/f1-analytics-dashboard",
  metrics: [
    { value: 73,  suffix: "%",  label: "Podium prediction accuracy" },
    { value: 3.2, suffix: "s",  label: "Mean absolute lap error" },
    { value: 500, suffix: "K+", label: "Historical data points" },
    { value: 70,  suffix: "+",  label: "Engineered features" },
  ],
};

export const openSource = [
  {
    repo: "chef/chef",
    meta: "Ruby · ~9k★",
    title: "Fixed an integer-umask crash in every Chef resource",
    desc: "Picked from ~200 triaged issues: any integer umask crashed a resource before it could converge, a bug open for 3.5 years. Fixed it and a second defect in the same method that hid the real error, added 4 regression tests, and carried the fix through a contested review by citing existing in-repo precedent.",
    facts: ["Shipped in v19.4.22", "CI green on 13 platforms", "PR #16260"],
    link: "https://github.com/chef/chef/pull/16260",
  },
  {
    repo: "spiceai/spiceai",
    meta: "Rust · 3k★",
    title: "Fixed a silent wrong-results bug in a Rust query engine",
    desc: "LIMIT over a partitioned dataset returned zero rows instead of three because of swapped skip and fetch values. Fixed with a one-line change plus 2 regression tests. Also filed the decimal-overflow bug report that led to a 2,200-line correctness fix by the project's CEO.",
    facts: ["PR #13507", "4 issues filed", "2,299 tests passing"],
    link: "https://github.com/spiceai/spiceai/pull/13507",
  },
];

export const projects = [
  {
    tag: "Client Work · Data Platform",
    title: "PNWER Trade & Tariffs",
    status: "In progress",
    desc: "Public-data trade and tariff explorer for PNWER, a nonprofit linking 10 U.S. states and Canadian provinces. Primary builder of the site on a 6-person team: a map-driven dashboard with USMCA scenarios, 360 auto-generated fact sheets, and a daily GitHub Actions pipeline that blocks publishing when figures don't reconcile.",
    pills: ["React", "TypeScript", "D3.js", "pandas"],
    link: "https://pnwer-trade-tariffs.vercel.app",
    linkLabel: "Live site",
  },
  {
    tag: "Real-time Streaming",
    title: "PulseTrader",
    desc: "Streaming pipeline pushing 10K trade events/sec through Kafka and three exactly-once Flink jobs for VWAP windows and anomaly detection. TimescaleDB serves real-time queries in under 100ms, with BigQuery for history.",
    pills: ["Kafka", "Flink", "TimescaleDB"],
    link: "https://github.com/vatsalp2008/PulseTrader",
  },
  {
    tag: "Computer Vision · WebGL",
    title: "Afterglow",
    desc: "In-browser light-painting studio driven by hand gestures. MediaPipe tracking in a Web Worker, One Euro filtering, a Three.js bloom renderer, an on-device ONNX doodle classifier, and Yjs CRDT multiplayer rooms.",
    pills: ["TypeScript", "Three.js", "MediaPipe"],
    link: "https://github.com/vatsalp2008/Afterglow",
  },
  {
    tag: "Microservices",
    title: "E-commerce Platform",
    desc: "9-service event-driven platform (one in Go) with choreography-based Sagas, a transactional outbox over Kafka, and database-per-service isolation. AWS infra provisioned with Terraform; Prometheus, Grafana, and Sentry for observability.",
    pills: ["Java", "Go", "Kafka", "Terraform"],
    link: "https://github.com/vatsalp2008/E-commerce-Platform",
  },
  {
    tag: "AV Perception",
    title: "PerceptNet",
    desc: "Camera and LiDAR fusion pipeline (YOLOv8 + PointPillars) with AB3DMOT multi-object tracking. ~77% Car mAP@0.7 on KITTI and ~22ms/frame after TensorRT INT8 quantization, published as a ROS 2 node.",
    pills: ["PyTorch", "TensorRT", "ROS 2"],
    link: "https://github.com/vatsalp2008/PerceptNet",
  },
  {
    tag: "Voice AI · LLM Evals",
    title: "EchoCoach",
    desc: "Voice-driven interview coach built solo in a 6-day hackathon with Whisper, ElevenLabs, and Claude. Later added an LLM-as-judge eval harness with significance testing, LoRA fine-tuning, and fp16/INT8/INT4 serving benchmarks.",
    pills: ["Python", "FastAPI", "Claude API"],
    link: "https://github.com/vatsalp2008/EchoCoach",
  },
  {
    tag: "Experimentation Platform",
    title: "ExperimentIQ",
    desc: "A/B testing and causal inference platform over 10M+ simulated events, with consistent-hash variant assignment, a 3-tier dbt layer over DuckDB and Snowflake, and a stats engine covering CUPED, sequential testing, DiD, and PSM. Metric computation went from 45s to 0.8s.",
    pills: ["dbt", "Snowflake", "FastAPI"],
    link: "https://github.com/vatsalp2008/ExperimentIQ",
  },
  {
    tag: "Agentic AI",
    title: "theManager",
    desc: "AI software factory that turns PRDs into code through a 7-agent pipeline, with live auto-derived architecture diagrams and an MCP server (11 tools) for Cursor and Claude Code. Ships as a 5-10MB Tauri desktop app.",
    pills: ["TypeScript", "Tauri", "MCP"],
    link: "https://github.com/aditya-pandita/theManager",
  },
  {
    tag: "iOS · Native App",
    title: "Wardrobe",
    desc: "Native iOS stylist that scans a closet with on-device Vision and Core ML segmentation, generates weather-aware outfits with Claude, and offers virtual try-on. Cut manual tagging effort by 85%.",
    pills: ["Swift", "SwiftUI", "Core ML"],
    link: "https://github.com/vatsalp2008/Wardrobe",
  },

  // ── Behind "Show all" ──
  {
    tag: "Agentic Platform",
    title: "SWARM",
    desc: "Parallel, auth-aware AI agent platform where specialized \"Bees\" run in isolated browser sandboxes behind human review gates. Per-Bee OAuth token vault, PII redaction, and a SHA-256 hash-chain audit log.",
    pills: ["LangGraph.js", "Next.js", "Playwright"],
    link: "https://github.com/vatsalp2008/Swarm",
  },
  {
    tag: "Android · Accessibility",
    title: "TransitLens",
    desc: "Offline-capable Android transit assistant with on-device TFLite scene understanding under 50ms, accessibility-aware routing that avoids stairs and steep grades, and a 10-pattern haptic language. WCAG 2.1 AA compliant.",
    pills: ["Kotlin", "Jetpack Compose", "TFLite"],
    link: "https://github.com/vatsalp2008/TransitLens",
  },
  {
    tag: "AV Simulation",
    title: "ScenarioForge",
    desc: "Adversarial scenario generation for AV safety validation: 50+ CARLA scenarios across 8 categories with physics-grounded sensor noise and closed-loop evaluation. Surfaced a 23% mAP drop in fog and 3 critical failure modes.",
    pills: ["CARLA", "PyTorch", "Ray"],
    link: "https://github.com/vatsalp2008/ScenarioForge",
  },
  {
    tag: "Distributed Systems",
    title: "StreamLine",
    desc: "High-performance messaging system with real-time WebSocket communication, async JPA persistence, and thread-safe concurrent ops. Includes p99 latency testing and 50-message history replay.",
    pills: ["Java 21", "Spring Boot", "WebSocket"],
    link: "https://github.com/vatsalp2008/StreamLine-Distributed-Messaging-Engine",
  },
  {
    tag: "Civic Tech Research",
    title: "FORUM",
    desc: "Multi-agent civic deliberation simulator. Census-grounded synthetic personas run Fishkin's Deliberative Polling protocol in LangGraph, backtested against resolved Washington ballot measures.",
    pills: ["Python", "LangGraph", "DuckDB"],
    link: "https://github.com/vatsalp2008/Forum",
  },
  {
    tag: "AI · PWA",
    title: "MoodMeals",
    desc: "Emotion-aware meal planning PWA grounded in nutritional psychiatry research. Multi-modal mood input (text, sliders, voice), pantry-aware recipes, and offline support.",
    pills: ["Next.js", "FastAPI", "Claude API"],
    link: "https://moodmeals-two.vercel.app",
    linkLabel: "Live demo",
  },
  {
    tag: "Game AI · LLM Agents",
    title: "Intelligent Chess AI",
    desc: "Two engines: a minimax engine with alpha-beta pruning and 8-ply iterative deepening that wins 70% against 1400-1600 ELO, and an LLM agent on local Ollama models with an 85.7% accuracy improvement.",
    pills: ["Python", "Ollama", "Flask"],
    link: "https://github.com/vatsalp2008/Intelligent-Chess-AI",
  },
  {
    tag: "Algorithms",
    title: "Seattle Transit Pathfinding",
    desc: "A*, BFS, and Dijkstra compared across 15,000+ King County Metro stops. Optimizations cut computation 35%, with a Rust scoring component and a Flask API serving 1000+ queries/sec.",
    pills: ["Python", "C++", "Rust"],
    link: "https://github.com/vatsalp2008/seattle-transit-pathfinder",
  },
  {
    tag: "ML · Classification",
    title: "Traffic Accident Severity",
    desc: "Severity classifier on 7.7M US accident records with SMOTE balancing, tuned XGBoost (ROC-AUC 0.818), SHAP explainability, and a Tableau dashboard for non-technical readers.",
    pills: ["XGBoost", "SHAP", "Tableau"],
    link: "https://github.com/vatsalp2008/Accidents-Severity",
  },
];
