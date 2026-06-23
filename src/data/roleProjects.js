export const roleGroups = {

  "AI/ML": [

    "RAG-Based Claim Verification System",

    "Automated Image Description Model",

    "AI-Driven Amazon Review Sentiment Analysis",

    "ML Model Comparison Project",

    "Comparative Study of Reinforcement Learning Methods",

    "Enzyme Classification Benchmarking",

   "AI-Enabled Recovery of Visualization Semantics from Deployed SVGs",
   "Earth in the Machine: AI Infrastructure & Material Cost"
  ],



  "Data Engineering": [

    "X/Twitter Scientific Impact Pipeline",

    "Rideshare Fare Prediction & Pricing Analysis",

    "E-Commerce Analytics with RStudio",

    "Enzyme Classification Benchmarking",

  ],



  "Software Systems": [

    "RISC-V Simulator",

    "Fraud Detection with Apache Flink",

    "Hotel Booking Web App",

    "Interactive Dashboard for US Traffic Accident Trends",

  ],



  "Visualization/HCI": [

    "AI-Enabled Recovery of Visualization Semantics from Deployed SVGs",

    "Interactive Dashboard for US Traffic Accident Trends",

    "X/Twitter Scientific Impact Pipeline",

  ],

};

export const roleCopy = {
  "AI/ML":
    "Modeling, evaluation, NLP, vision, RAG, and experiments where the result has to be measured, not just generated.",
  "Data Engineering":
    "Pipelines, messy datasets, stream processing, benchmarking, and analysis that turns raw inputs into usable structure.",
  "Visualization/HCI":
    "Interfaces and research around charts, visual semantics, interaction, and making complex information easier to inspect.",
  "Software Systems":
    "Systems, simulators, web apps, dashboards, and software pipelines that show I can build beyond notebooks.",
};
export const projectDetails = {

"RAG-Based Claim Verification System": {
  id: "rag-claim-verification",
  title: "Evidence-Grounded Claim Verification with RAG",
  category: "AI/ML",
  eyebrow: "NLP · RAG · Fact Verification",
  description: "Designed a fact-checking system that checks claims against retrieved evidence, so the final verdict is tied to source context instead of a standalone LLM response.",
  problem: "Fact-checking systems are hard to trust when they only return a verdict. The challenge was to link each claim to source evidence, handle missing or conflicting context, and avoid confident labels when retrieval did not provide enough support.",
  built: "Built an evidence-first RAG pipeline that embedded claims and documents with Sentence-BERT, searched top-3 sources with FAISS, guided GPT models through structured evidence-extraction prompts, and applied few-shot examples to classify claims into four AveriTeC veracity labels.",
  result: "Evaluated 200 AveriTeC dev examples across GPT-3.5-turbo, GPT-4o-mini, GPT-4o, and a direct GPT-4o baseline. GPT-4o-mini was the strongest RAG classifier, and failure analysis showed many uncertain predictions came from missing evidence rather than classification alone.",
  tech: [
    "Python",
    "Sentence-BERT",
    "FAISS",
    "GPT-4o",
    "GPT-4o-mini",
    "GPT-3.5-turbo",
    "AveriTeC",
    "METEOR",
    "NLTK"
  ],
  bullets: [
    "Built the verification flow around evidence first: retrieve relevant documents, extract claim-specific support, then classify the final verdict.",
    "Indexed 1,000 AveriTeC training documents with dense Sentence-BERT embeddings and retrieved the top-3 most relevant sources for each claim.",
    "Implemented the few-shot ICL classification stage using the original claim, generated question, extracted evidence, and example label pairs.",
    "Evaluated predictions with accuracy, METEOR similarity, and AveriTeC score to measure both verdict quality and evidence alignment.",
    "Used failure analysis to show why many uncertain cases were not just model mistakes, but symptoms of weak or missing retrieved evidence."
  ],
      metrics: [ { label: "Evidence corpus", value: "1K docs" }, { label: "Claims evaluated", value: "200" }, { label: "Retrieved per claim", value: "Top-3" }, { label: "Verdict categories", value: "4" }, { label: "Evidence similarity", value: "0.51" }, { label: "Best evidence score", value: "0.34" }, ],

impactLine: "Each verdict becomes more inspectable when the system shows the evidence path behind the decision.",

},


"Automated Image Description Model": {
  id: "automated-image-captioning",
  title: "Automated Image Captioning with Transformer Decoder",
  category: "AI/ML",
  eyebrow: "Computer Vision · NLP · Deep Learning",
  description: "Built an image captioning model that turns visual content into natural-language descriptions using CNN feature extraction and Transformer-based decoding.",
  problem: "Images carry useful information, but they are not directly readable, searchable, or accessible as language. The challenge was to build a model that could understand visual content, capture important objects and scene context, and express that information as a clear caption.",
  built: "Designed an end-to-end captioning pipeline with image preprocessing, caption cleaning, text vectorization, CNN-based feature extraction using EfficientNetB7, and a Transformer decoder that generates captions token by token from learned visual and language representations.",
  result: "Evaluated generated captions with BLEU scores, achieving 0.636 BLEU-1, 0.564 BLEU-2, 0.477 BLEU-3, and 0.339 BLEU-4. The model produced readable scene descriptions, showing how vision and language components can work together in one pipeline.",
  tech: [
    "Python",
    "TensorFlow",
    "EfficientNetB7",
    "Transformer Decoder",
    "CNN",
    "BLEU",
    "Text Vectorization",
    "Image Augmentation"
  ],
  bullets: [
    "Processed image-caption pairs with caption cleaning, start/end tokens, vocabulary encoding, batching, masking, and 299×299 image resizing.",
    "Used EfficientNetB7 as the visual feature extractor, giving the decoder richer image representations before caption generation.",
    "Built the language generation stage with Transformer-style decoding, positional embeddings, self-attention, and cross-attention over image features.",
    "Applied augmentation techniques such as horizontal flipping, rotation, and contrast adjustment to improve training robustness.",
    "Measured caption quality with BLEU-1 through BLEU-4 instead of relying only on sample outputs or qualitative inspection."
  ],
  metrics: [ { label: "Image input size", value: "299×299" }, { label: "Vocabulary size", value: "10K" }, { label: "Batch size", value: "64" }, { label: "Captions per image", value: "5" }, { label: "Evaluation metric", value: "BLEU" }, { label: "Architecture", value: "CNN + Transformer" }, ],

impactLine: "By translating visual features into readable captions, the system makes image content more accessible and easier to reason about.",

},

"AI-Driven Amazon Review Sentiment Analysis": {
  id: "amazon-review-sentiment-analysis",
  title: "Amazon Review Sentiment Analysis",
  category: "AI/ML",
  eyebrow: "NLP · Sentiment Analysis · E-commerce Reviews",
  description: "Analyzed large-scale Amazon review text to classify customer sentiment and compare how different NLP models interpret product feedback.",
  problem: "Customer reviews contain more nuance than star ratings alone can show. The challenge was to turn nearly 500K noisy Amazon Fine Food reviews into usable sentiment signals that could separate positive, neutral, and negative language without manually reading each review.",
  built: "Built a Python NLP workflow that cleaned review text, explored word patterns, vectorized reviews with TF-IDF, compared VADER and RoBERTa sentiment scoring, and trained LinearSVC, BernoulliNB, and Logistic Regression models for three-class sentiment prediction.",
  result: "Analyzed a 300.9MB review dataset and found Logistic Regression performed best at nearly 81% accuracy, while BernoulliNB reached about 79% with faster training and prediction. The comparison clarified tradeoffs between speed, model choice, and sentiment quality.",
  tech: [
    "Python",
    "Pandas",
    "NumPy",
    "NLTK",
    "VADER",
    "RoBERTa",
    "Scikit-learn",
    "TF-IDF",
    "Seaborn",
    "Matplotlib",
    "WordCloud"
  ],
metrics: [
{ label: "Reviews analyzed", value: "~500K" },
{ label: "Dataset size", value: "300.9MB" },
{ label: "Best accuracy", value: "~81%" },
{ label: "Fast baseline accuracy", value: "79%" },
{ label: "Sentiment classes", value: "3" },
{ label: "Models compared", value: "5+" }
],
  bullets: [
    "Processed messy review text with URL handling, emoji replacement, repeated-character normalization, stopword removal, and lemmatization.",
    "Used TF-IDF features to convert cleaned customer reviews into numerical inputs for traditional machine learning classifiers.",
    "Compared lexicon-based VADER scoring with Transformer-based RoBERTa predictions to understand where faster and richer sentiment methods differ.",
    "Evaluated LinearSVC, BernoulliNB, and Logistic Regression, selecting the strongest model based on accuracy and practical training behavior.",
    "Visualized review patterns with word frequency analysis, sentiment distributions, and model comparison charts to make customer feedback easier to interpret."
  ],
  impactLine: "Turned thousands of scattered product reviews into clearer sentiment signals that can support better customer and business decisions.",
},



"ML Model Comparison Project": {
  id: "ml-model-comparison",
  title: "Comparative ML Benchmarking Across Four Datasets",
  category: "AI/ML",
  eyebrow: "Machine Learning · Model Evaluation · Classification",
  description: "Compared from-scratch k-NN, Neural Networks, and Random Forests across different dataset types to understand when simpler models outperform deeper ones.",
  problem: "Model choice depends heavily on the data. The challenge was to compare how different algorithms behave across image-like, biomedical, numerical, and mixed tabular datasets instead of assuming one model would generalize well everywhere.",
  built: "Designed a multi-dataset evaluation workflow with stratified cross-validation, feature normalization, hyperparameter tuning, from-scratch neural network training, Random Forest experiments, learning curves, and accuracy/F1 analysis across Digits, Parkinson’s, Rice, and Credit Approval tasks.",
  result: "Found that simpler models often generalized better on smaller structured datasets. Random Forest reached 0.9757 accuracy on Digits, 0.9387 F1 on Parkinson’s detection, and outperformed the neural network on mixed credit approval data.",
  tech: [
    "Python",
    "NumPy",
    "Pandas",
    "Scikit-learn",
    "k-NN",
    "Neural Networks",
    "Random Forest",
    "Decision Trees",
    "Cross-Validation",
    "Matplotlib"
  ],
  metrics: [ { value: "4", label: "Datasets evaluated" }, { value: "3", label: "Model families compared" }, { value: "10-fold", label: "Stratified validation" }, { value: "1-50", label: "k-NN neighbors tested" }, { value: "1-50", label: "Random Forest trees tuned" }, { value: "4", label: "Classification tasks" } ],
  bullets: [
    "Compared algorithms across four dataset types: handwritten digits, biomedical voice features, rice grain measurements, and credit approval records.",
    "Tuned k values, neural network architectures, L2 regularization, epochs, tree counts, depth, and split settings to study model behavior.",
    "Used stratified cross-validation, learning curves, accuracy, and macro-F1 to evaluate generalization instead of relying on one train/test split.",
    "Identified overfitting patterns such as k-NN with k=1 performing perfectly on training data but requiring a more stable neighbor choice.",
    "Avoided Naive Bayes on the Rice dataset after feature correlation analysis showed its independence assumption was a poor fit."
  ],

  impactLine: "Strong model selection comes from understanding the data, not simply choosing the most complex algorithm.",
},

"Comparative Study of Reinforcement Learning Methods": {
  id: "rl-algorithm-comparison",
  title: "Comparative Study of Reinforcement Learning Methods",
  category: "AI/ML",
  eyebrow: "Reinforcement Learning · Planning · Sequential Decisions",
  description: "Implemented reinforcement learning algorithms from scratch to compare how agents learn, plan, and adapt in stochastic grid environments.",
  problem: "Reinforcement learning algorithms can look similar in theory, but behave differently when rewards are delayed, transitions are noisy, and mistakes carry penalties. The challenge was to understand how model-free learning, eligibility traces, and model-based planning perform under the same environment conditions.",
  built: "Implemented True Online SARSA(λ) and Prioritized Sweeping from scratch in Python/NumPy, then evaluated them against One-Step Actor-Critic on GridWorld and Cat-vs-Monsters environments using tuned hyperparameters, value-error tracking, learning curves, and repeated random-seed experiments.",
  result: "Prioritized Sweeping learned efficiently by planning from high-priority updates, while True Online SARSA(λ) gave stable model-free learning through eligibility traces. The comparison showed how environment stochasticity changes the tradeoff between learning speed, stability, and final value-function quality.",
  tech: [
    "Python",
    "NumPy",
    "Reinforcement Learning",
    "True Online SARSA(λ)",
    "Prioritized Sweeping",
    "Actor-Critic",
    "MDPs",
    "Value Iteration",
    "Matplotlib",
  ],
  bullets: [
    "Built True Online SARSA(λ) with Dutch eligibility traces to handle delayed reward credit assignment across visited states.",
    "Implemented Prioritized Sweeping with a priority queue, learned transition model, reverse predecessor tracking, and planning updates.",
    "Evaluated agents on two stochastic MDPs: a GridWorld with obstacles and water penalties, and Cat-vs-Monsters with food rewards, monster penalties, and living cost.",
    "Averaged learning behavior across 10 random seeds and 10,000 episodes per run to reduce noise from stochastic transitions.",
    "Analyzed MSE learning curves against reference values to compare sample efficiency, convergence behavior, and stability across algorithms."
  ],
  metrics: [
    {
      value: "3",
      label: "RL methods compared"
    },
    {
      value: "2",
      label: "Stochastic MDPs"
    },
    {
      value: "10K",
      label: "Episodes per run"
    },
    {
      value: "10",
      label: "Seeds averaged"
    },
    {
      value: "λ = 0.7",
      label: "SARSA trace decay"
    },
    {
      value: "n = 5",
      label: "Planning steps"
    }
  ],
  impactLine: "Sequential decision systems become easier to reason about when learning speed, planning behavior, and stability are tested side by side.",
},


"Enzyme Classification Benchmarking": {
  id: "enzyme-classification-benchmarking",
  title: "Protein Enzyme Classification using Machine Learning",
  category: "AI/ML",
  eyebrow: "Bioinformatics · Protein ML · Benchmarking",
  description: "Benchmarked low-compute sequence methods against protein foundation-model scores to evaluate enzyme EC classification without heavy GPU embedding costs.",
  problem: "Protein foundation models can perform well on enzyme-function tasks, but generating embeddings often requires expensive compute. The challenge was to test whether simpler sequence-based methods could remain competitive on DGEB EC Classification, where each enzyme class had only a few labeled examples.",
  built: "Built a benchmarking pipeline comparing amino-acid composition, one-hot features, 3-mer models, prototype classifiers, BLAST, PSI-BLAST, DIAMOND, and published ESM2, ProtTrans, and ProGen2 scores using weighted F1 and CPU runtime as the main comparison points.",
  result: "Relaxed BLAST reached 0.584 weighted F1 in 3.3 seconds on a Colab CPU, outperforming several published foundation-model baselines. The analysis showed that classic homology search captured much of the useful signal at a fraction of the compute cost.",
  tech: [
    "Python",
    "Scikit-learn",
    "BLAST+",
    "PSI-BLAST",
    "DIAMOND",
    "Logistic Regression",
    "Random Forest",
    "CountVectorizer",
    "UniProt REST API",
    "Google Colab CPU"
  ],
  bullets: [
    "Evaluated enzyme EC classification across 128 classes with a 4-shot setup, using 512 training sequences and 128 test sequences.",
    "Built low-compute ML baselines with amino-acid composition, padded one-hot features, 3-mer extraction, χ² feature selection, and prototype similarity.",
    "Used BLAST-style homology transfer to predict labels from nearest sequence matches, including relaxed E-value and PSI-BLAST variants.",
    "Compared runtime and weighted F1 against published protein foundation-model scores to separate raw performance from compute efficiency.",
    "Added taxonomy-stratified analysis with UniProt phylum metadata to check how performance changed across well-represented, medium, and rare organism groups."
  ],
  metrics: [ { value: "128", label: "EC classes" }, { value: "512", label: "Train sequences" }, { value: "128", label: "Test sequences" }, { value: "4-shot", label: "Setup" }, { value: "3.3s", label: "CPU runtime" }, { value: "BLAST", label: "Strongest low-compute baseline" } ],
  impactLine: "Strong biological baselines can make protein-function prediction more practical when compute cost matters as much as model size.",
},

"X/Twitter Scientific Impact Pipeline": {
  id: "twitter-scientific-impact-pipeline",
  title: "Scientific Hype & Impact Analysis",
  category: "Data Engineering",
  eyebrow: "Research Data Mining · Bibliometrics · Social Media Analysis",
  lab: {
  name: "SIMS Lab",
  url: "https://przemyslslaw.github.io/sims-lab/",
  description:
    "The SIMS Lab studies how technology shapes society and how to build responsible AI-based systems and media. It is a transatlantic research group at University College Dublin and UMass Amherst, and this project connects to the lab’s work on social media, scientific attention, and responsible data-driven systems.",
},
  description: "Analyzed X/Twitter activity around scientific papers to measure how hype language and online promotion differ across research fields.",
  problem: "Scientific impact is often measured through citations, but visibility can also be shaped by online attention, field culture, and social promotion. The challenge was to turn messy tweet and thread data into measurable signals that could help compare how research spreads across disciplines.",
  built: "Built the tweet-processing and hype-analysis workflow for Altmetric-linked scientific papers, converting inconsistent X/Twitter outputs into canonical JSON, validating tweet and thread records, detecting hype-word usage, and preparing structured features for downstream bibliometric analysis.",
  result: "Analyzed large-scale tweet and thread activity across computer science and physics, finding higher hype-word prevalence in CS than physics at both tweet and thread levels. The analysis supported a broader study of how online promotion may influence scientific visibility.",
  tech: [
    "Data Mining",
    "JSON",
    "JSONL",
    "Altmetric",
    "X/Twitter Data",
    "Semantic Scholar",
    "arXiv",
    "Crossref",
    "Bibliometrics",
    "Annotation Codebook"
  ],
  bullets: [
    "Normalized inconsistent X/Twitter records into a cleaner canonical JSON structure for tweet-level and thread-level analysis.",
    "Processed Altmetric-linked social media traces across computer science and physics papers to compare discipline-specific promotion patterns.",
    "Detected hype-word usage across tweets and grouped threads, separating tweet-level counts from thread-level prevalence.",
    "Prepared labeled hype-word examples and contributed to a codebook for more consistent manual annotation and reliability checks.",
    "Connected social promotion features with broader impact measures such as influential citations, field entropy, venue entropy, and disruption score."
  ],
  metrics: [
    {
      value: "865K+",
      label: "Physics tweets"
    },
    {
      value: "150K+",
      label: "CS tweets"
    },
    {
      value: "848K+",
      label: "Physics threads"
    },
    {
      value: "147K+",
      label: "CS threads"
    },
    {
      value: "6.93%",
      label: "CS hype-word tweets"
    },
    {
      value: "5.68%",
      label: "Physics hype-word tweets"
    }
  ],
  impactLine: "Scientific visibility becomes easier to study when online attention can be cleaned, measured, and compared across fields.",
},



"Rideshare Fare Prediction & Pricing Analysis": {
  id: "rideshare-fare-pricing-analysis",
  title: "Rideshare Fare Prediction & Pricing Analysis",
  category: "Data Engineering",
  eyebrow: "Statistical Modeling · Transportation Analytics · Pricing Analysis",
  description: "Modeled Uber and Lyft fare data in Boston to identify which ride, route, surge, time, and weather factors actually explain pricing.",
  problem: "Rideshare prices can feel unpredictable because many factors appear to matter at once: provider, distance, service tier, route, surge, time, and weather. The challenge was to separate assumptions from evidence and identify which variables meaningfully explained fare differences.",
  built: "Built a statistical analysis workflow using Welch t-tests, Cohen’s d, ANOVA, Tukey HSD, weather regression, predictor selection, regression diagnostics, and multiple linear regression to compare pricing effects across 637K+ Uber and Lyft ride records.",
  result: "Found that fares were driven mainly by service tier, distance, surge multiplier, source, and destination. Weather and time-of-day looked intuitive, but added little predictive value, while the final regression model explained 92.86% of fare variance.",
  tech: [
    "Statistical Modeling",
    "Multiple Linear Regression",
    "Welch t-test",
    "Cohen’s d",
    "ANOVA",
    "Tukey HSD",
    "Regression Diagnostics",
    "Residual Analysis",
    "Q-Q Plots",
    "Kaggle Rideshare Dataset"
  ],
  bullets: [
    "Analyzed 637,976 cleaned Uber/Lyft fare records from a Boston dataset with 57 ride, route, provider, time, and weather variables.",
    "Used effect size alongside statistical tests to avoid overstating differences that were significant only because of the large dataset.",
    "Compared provider pricing, service tiers, surge behavior, weather effects, and time patterns through targeted research questions.",
    "Built a final regression model around the strongest predictors: service type, distance, surge multiplier, source, and destination.",
    "Validated model behavior with held-out performance, residual plots, and Q-Q diagnostics instead of relying only on fit statistics."
  ],
  metrics: [
    {
      value: "637,976",
      label: "Ride records analyzed"
    },
    {
      value: "57",
      label: "Variables studied"
    },
    {
      value: "92.86%",
      label: "Fare variance explained"
    },
    {
      value: "$2.49",
      label: "Held-out RMSE"
    },
    {
      value: "0.167",
      label: "Uber vs Lyft effect size"
    },
    {
      value: "5",
      label: "Main pricing drivers"
    }
  ],
  impactLine: "Rideshare pricing becomes less mysterious when statistical testing separates real fare drivers from factors that only seem important.",
},


"E-Commerce Analytics with RStudio": {
  id: "ecommerce-analytics-rstudio",
  title: "E-Commerce Analytics with RStudio",
  category: "Data Engineering",
  eyebrow: "Data Analytics · Business Intelligence · RStudio",
  description: "Built a reproducible Quarto report that analyzes Global Superstore transactions across sales, profit, customers, products, discounts, and shipping performance.",
  problem: "E-commerce revenue can look strong while hiding weak profit margins, costly discounts, uneven customer value, or slow delivery. The challenge was to look beyond sales totals and understand which parts of the business were actually performing well.",
  built: "Built an RStudio and Quarto analytics workflow that cleaned transaction data, engineered customer purchase-frequency and delivery-time features, and visualized performance across customers, product categories, countries, discounts, profit, and shipping patterns.",
  result: "Produced a reproducible business report that made sales, profitability, customer behavior, product performance, discount effects, and delivery efficiency easier to compare. The analysis helped separate surface-level revenue from healthier measures of business performance.",
  tech: [
    "R",
    "RStudio",
    "Quarto",
    "tidyverse",
    "dplyr",
    "ggplot2",
    "lubridate",
    "Exploratory Data Analysis",
    "Data Visualization",
    "Reproducible Reporting"
  ],
  bullets: [
    "Cleaned and transformed Global Superstore transaction data into analysis-ready fields for business reporting.",
    "Engineered customer purchase-frequency buckets to compare customer behavior beyond one-time sales totals.",
    "Calculated delivery time from order and ship dates to study shipping efficiency across countries and regions.",
    "Compared sales and profit across products, customer segments, countries, discounts, and yearly business trends.",
    "Used Quarto to combine code, charts, summaries, and written insights into a reproducible analytics report."
  ],
  metrics: [
    {
      value: "2011-2014",
      label: "Order period"
    },
    {
      value: "Quarto",
      label: "Report format"
    },
    {
      value: "Customer frequency",
      label: "Engineered feature"
    },
    {
      value: "Delivery time",
      label: "Engineered feature"
    },
    {
      value: "Sales vs profit",
      label: "Core analysis"
    },
    {
      value: "Discounts",
      label: "Margin lens"
    }
  ],
  impactLine: "Better business decisions start when revenue, profit, customer behavior, and delivery performance can be read together.",
},

"Fraud Detection with Apache Flink": {
  id: "fraud-detection-apache-flink",
  title: "Real-Time Fraud Detection with Apache Flink",
  category: "Software Systems",
  eyebrow: "Stream Processing · Stateful Systems · Fraud Detection",
  description: "Built a real-time Apache Flink pipeline that detects suspicious account-level transaction patterns using keyed state, timers, and custom alert logging.",
  problem: "Fraud signals often depend on event sequences, not single transactions. The challenge was to monitor continuous transaction streams, remember short-lived account behavior, enforce a time window, and clear outdated signals before stale state created noisy or incorrect alerts.",
  built: "Implemented a Java/Flink job that keys transactions by account ID, stores small-transaction context with ValueState, checks for a matching large transaction from the same ZIP code, registers a one-minute timer, and emits structured DetailedAlert objects through a custom sink.",
  result: "Detected small-to-large transaction patterns as events arrived instead of waiting for batch analysis. The pipeline produced account-specific alerts, routed them through DataStream and DetailedAlertSink, and used timer-based cleanup after detection or timeout.",
  tech: [
    "Java",
    "Apache Flink",
    "DataStream API",
    "Keyed Streams",
    "ValueState",
    "Timers",
    "Custom Source",
    "Custom Sink",
    "SLF4J",
    "log4j"
  ],
  bullets: [
    "Tracked each account independently with keyed stream processing so one account’s suspicious activity did not affect another account’s state.",
    "Used ValueState to store the small-transaction signal, ZIP code context, and temporary detection state only while the one-minute window was active.",
    "Required the follow-up large transaction to match the same ZIP code, adding contextual validation beyond amount thresholds alone.",
    "Registered timers to enforce the detection window and automatically clear state when no matching transaction arrived in time.",
    "Connected DetailedFraudDetector to DetailedAlertSink so alerts flowed from Flink collectors into SLF4J/log4j warning output."
  ],
  metrics: [
    {
      value: "1 min",
      label: "Detection window"
    },
    {
      value: "<$10",
      label: "Small-transaction trigger"
    },
    {
      value: "≥$500",
      label: "Large-transaction threshold"
    },
    {
      value: "Per-account",
      label: "State tracking"
    },
    {
      value: "ZIP match",
      label: "Context check"
    },
    {
      value: "log4j",
      label: "Alert output"
    }
  ],
  impactLine: "Suspicious transaction patterns are easier to catch when stream processors remember just enough context, act quickly, and clean up automatically.",
},


"RISC-V Simulator": {
  id: "risc-v-pipeline-simulator",
  title: "Cycle-Accurate RISC-V Pipeline Simulator",
  category: "Software Systems",
  eyebrow: "Computer Architecture · Systems Programming · C++",
  description : "Simulated a 5-stage pipelined RISC-V processor in C++, making instruction flow, hazards, stalls, flushes, and cycle-level performance visible.",  problem: "Pipelined processors are hard to reason about because multiple instructions move through different stages at the same time. The challenge was to make hazards, branch behavior, register updates, memory access, stalls, and flushes observable instead of hidden behind final program output.",
  built: "Implemented a cycle-accurate RISC-V simulator in C++ with IF, ID, EX, MEM, and WB stages, pipeline registers, instruction/data memory, register state, hazard handling, branch resolution, and both instruction-level and cycle-level execution modes.",
  result: "Created a simulator that executes RISC-V programs step by step while exposing pipeline latch values, register contents, instruction movement, stalls, flushes, total cycles, and stage utilization, helping explain how architectural decisions affect execution behavior.",
  tech: [
    "C++",
    "RISC-V",
    "Computer Architecture",
    "Pipeline Simulation",
    "Hazard Handling",
    "Branch Resolution",
    "Memory Simulation",
    "Object-Oriented Design",
    "Cycle-Level Tracing",
    "Performance Metrics"
  ],
  bullets: [
    "Modeled the full 5-stage pipeline with IF/ID, ID/EX, EX/MEM, and MEM/WB pipeline registers.",
    "Implemented arithmetic, logical, memory, comparison, jump, and branch instructions across R, I, S, B, U, and J formats.",
    "Handled data, structural, and control hazards using stalls, flushes, and branch resolution in the execute stage.",
    "Added instruction-level and cycle-level modes so users can inspect execution at different levels of detail.",
    "Logged register values, pipeline latch state, instruction flow, total cycles, and stage utilization for debugging and analysis."
  ],
  metrics: [
    {
      label: "Pipeline stages",
      value: "5"
    },
    {
      label: "Registers",
      value: "32"
    },
    {
      label: "Instruction memory",
      value: "2KB"
    },
    {
      label: "Data memory",
      value: "2KB"
    },
    {
      label: "Execution modes",
      value: "2"
    },
    {
      label: "Hazard types",
      value: "3"
    }
  ],
  impactLine: "Processor behavior becomes easier to understand when every instruction can be traced from fetch to write-back, cycle by cycle.",
},
"Hotel Booking Web App": {
  id: "hotel-booking-web-app",
  title: "Hotel Booking Website",
  category: "Software Systems",
  eyebrow: "Front-End Development · React · Web Design",
  company: {
  name: "Ideassion Technology Solutions",
  url: "https://ideassion.com/",
  description:
  "Ideassion Technology Solutions builds digital platforms and workflow solutions across industries such as manufacturing, healthcare, retail, fintech, and construction.",
},
  description: "Developed to the front-end development of a hotel booking website, building user-facing layouts and interactive UI components with HTML, CSS, JavaScript, and React.",
  problem: "Hotel booking websites need clear, approachable pages so users can browse stays, compare options, and move through the booking experience without confusion. The challenge was to support a clean front-end structure that made hotel information easier to scan and interact with.",
  built: "Developed and styled front-end components during a Web Developer Internship at Ideassions Technology Solutions, using HTML, CSS, JavaScript, and React to support page layouts, visual consistency, and user-facing sections of the hotel booking web application.",
  result: "Contributed to expanding and improving the website’s front-end as part of a team development environment. The work strengthened the booking interface’s structure and gave me practical experience building real web application components.",
  tech: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Front-End Development",
    "Web Design",
    "UI Layout",
    "Team Collaboration",
    "Web Application Development"
  ],
  bullets: [
    "Built and styled user-facing website components using HTML, CSS, JavaScript, and React.",
    "Collaborated with a development team to improve the hotel booking website’s layout, structure, and page presentation.",
    "Focused on clean visual hierarchy so booking-related information could be easier for users to read and navigate.",
    "Contributed to front-end scalability by working on reusable page sections and consistent styling patterns.",
    "Gained hands-on internship experience contributing to a real web application in a team setting."
  ],
  metrics: [
    {
      value: "Summer 2023",
      label: "Internship period"
    },
    {
      value: "React",
      label: "UI framework"
    },
    {
      value: "JavaScript",
      label: "Interactivity"
    },
    {
      value: "Front-end",
      label: "Primary focus"
    },
    {
      value: "Hotel booking",
      label: "Application domain"
    },
    {
      value: "Team-based",
      label: "Development setting"
    }
  ],
  impactLine: "A booking experience feels more usable when its pages are structured clearly, styled consistently, and built around the user’s next step.",
},


"Interactive Dashboard for US Traffic Accident Trends": {
  id: "us-road-accidents-dashboard",
  title: "US Road Accidents Interactive Dashboard",
  category: "Visualization/HCI",
  eyebrow: "Data Visualization · D3.js · Civic Analytics",
  description: "Designed an interactive D3.js dashboard that turns US traffic accident records into explorable views of state rankings, severity trends, and road-feature risks.",
  problem: "Traffic accident datasets are too large and complex to understand from raw tables alone. The challenge was to make patterns in location, severity, time, and road infrastructure visible without overwhelming users or sacrificing browser performance.",
  built: "Designed a D3.js dashboard with a landing page, tab-based navigation, animated SVG charts, hover tooltips, deep-linked sections, and Python-preprocessed JSON data for top states, severity trends, and road-feature analysis.",
  result: "Created a focused visual analytics experience that made accident hotspots, yearly severity changes, and infrastructure-related patterns easier to compare. A 100K-row subset kept the dashboard interactive while preserving meaningful trends from the larger dataset.",
  tech: [
    "D3.js v7",
    "JavaScript",
    "HTML",
    "CSS",
    "SVG",
    "Python",
    "Pandas",
    "NumPy",
    "JSON",
    "GitHub Pages"
  ],
  bullets: [
    "Cleaned and transformed US accident records into browser-ready JSON for interactive D3 visualizations.",
    "Built three core dashboard views: top accident states, severity trends over time, and severity distribution by road feature.",
    "Used animated SVG charts, hover tooltips, legends, and tab navigation to support exploration without cluttering the interface.",
    "Balanced visual ambition with performance by moving away from an overloaded heatmap toward clearer ranking and trend-based views.",
    "Designed the user flow around a landing page and deep-linked visualization tabs so each chart answered a distinct road-safety question."
  ],
  metrics: [
    {
      value: "2016-2023",
      label: "Accident data range"
    },
    {
      value: "100K",
      label: "Dashboard row subset"
    },
    {
      value: "500MB+",
      label: "Full JSON challenge"
    },
    {
      value: "3",
      label: "Core dashboard views"
    },
    {
      value: "D3 v7",
      label: "Visualization library"
    },
    {
      value: "SVG",
      label: "Chart rendering"
    }
  ],
  impactLine: "Road-safety patterns become easier to act on when accident data is organized into clear, interactive visual stories.",
},


"AI-Enabled Recovery of Visualization Semantics from Deployed SVGs": {
  id: "cohort-semantic-svg-labeling",
  title: "AI-Enabled Semantic Recovery for Deployed SVG Charts",
  category: "Visualization/HCI",
  eyebrow: "AI for Visualization · Semantic Recovery · Accessibility",
lab: {
    name: "HCI-VIS Lab",
    url: "https://groups.cs.umass.edu/hci-vis/",
    description:
"This project was part of the HCI-VIS Lab at UMass Amherst, where the work focuses on visualization and interaction systems. It connected well with the lab’s goal of making charts easier to understand, use, and access.",
  },  
description: "Recovered semantic structure from deployed SVG charts by grouping visual primitives into cohorts and converting raw elements into machine-usable annotations.",  problem: "Deployed SVG charts preserve how a visualization looks, but often lose what each element means. The challenge was to recover whether shapes, lines, paths, and text represented data marks, axes, labels, legends, gridlines, or annotations after the chart was already published.",
  built: "Designed a cohort-based semantic labeling pipeline that fingerprints SVG primitives by geometry, style, DOM context, and spatial repetition, groups similar elements into cohorts, infers chart roles with multimodal reasoning, and grounds those labels back onto individual SVG elements.",
  result: "Evaluated the pipeline across 102 SVG visualizations and 17,276 labeled elements, achieving strong recovery across mark type, visualization role, and data-role labels. The ablation showed cohorting was essential, dramatically outperforming whole-chart labeling without structural grouping.",
  tech: [
    "SVG",
    "Semantic SVG",
    "Data Visualization",
    "AI Systems",
    "Multimodal Reasoning",
    "Structural Fingerprinting",
    "DOM Analysis",
    "getBBox()",
    "Cohort Construction",
  ],
  bullets: [
    "Extracted structural fingerprints from SVG primitives using tag type, rendered geometry, centroid position, styling, opacity, parent groups, and DOM hierarchy.",
    "Grouped visually and structurally similar elements into cohorts so semantic inference could happen at the chart-part level instead of isolated primitives.",
    "Recovered chart semantics such as data marks, axis ticks, tick labels, gridlines, legend entries, annotations, mark type, and data-role labels.",
    "Grounded cohort-level predictions back into element-level Semantic SVG annotations with deterministic structural validation.",
    "Validated the approach with ablation tests, repeated-label consistency checks, and expert review of recovered Semantic SVG outputs."
  ],
  metrics: [
    {
      value: "102",
      label: "SVG visualizations"
    },
    {
      value: "17,276",
      label: "Labeled elements"
    },
    {
      value: "51",
      label: "Chart types"
    },
    {
      value: "0.853",
      label: "Role accuracy"
    },
    {
      value: "0.860",
      label: "Data-role accuracy"
    },
    {
      value: "91.9%+",
      label: "Label agreement"
    }
  ],
  impactLine: "Charts become more accessible, queryable, and editable when their visual elements can be recovered as structured semantic objects.",
},




"Earth in the Machine: AI Infrastructure & Material Cost": {
  id: "earth-in-the-machine-ai-infrastructure",
  title: "AI Infrastructure & Material Cost Research",
  category: "AI/ML",
  eyebrow: "AI Infrastructure · Sustainability · Research Mentorship",
lab: {
  name: "EHC",
  url: "https://sites.google.com/umass.edu/ehi/the-artefacts-project/description?authuser=0",
  linkLabel: "About EHC",
  description:
    "The Art(e)Facts Project, part of UMass Environmental Humanities, uses artefacts to rethink how people understand the Earth, technology, and sustainability in the Anthropocene. My work connected the Rausch Mineral Gallery’s mineral specimens to AI infrastructure, tracing how materials such as quartz become part of timing, hardware, data centers, energy demand, and e-waste.",
},
  description: "Led cross-disciplinary research on AI’s physical infrastructure while mentoring an undergraduate researcher on minerals, data centers, energy demand, supply chains, and e-waste.",
  problem: "AI systems are often presented as software-only tools, but every model response depends on physical infrastructure. The challenge was to make the hidden stack visible: mined materials, hardware, networks, data centers, electricity, cooling systems, labor, and eventual waste.",
  built: "Developed a systems-level research framework starting from quartz as a hardware-infrastructure anchor, mapped an AI request across device, network, data center, response, and disposal stages, and mentored an undergraduate researcher throughout the cross-disciplinary research process.",
  result: "Turned technical, environmental, and infrastructure research into a clear model of AI’s physical footprint. The work connected compute demand with hardware supply chains, energy use, and lifecycle costs while adding hands-on research mentorship to the project’s execution.",
  tech: [
    "AI Infrastructure",
    "Data Centers",
    "Technical Communication",
    "Research Mentorship"
  ],
  bullets: [
    "Led research into the lifecycle of an AI interaction, from user device to network routing, data-center computation, energy use, cooling, and e-waste.",
    "Used quartz as a technical anchor to explain how timing, precision, and synchronization connect mineral materials to digital systems.",
    "Researched critical minerals, hardware supply chains, extraction burdens, labor conditions, and disposal pathways behind modern computing infrastructure.",
    "Mentored an undergraduate researcher on this cross-disciplinary research, guiding source evaluation, research direction, argument framing, and deliverable development.",
    "Synthesized AI infrastructure, energy systems, mineral supply-chain, and sustainability research into a structured narrative for technical and public audiences."
  ],

metrics: [
  {
    value: "Quartz",
    label: "Anchor"
  },
  {
    value: "AI chain",
    label: "Mapped"
  },
  {
    value: "Minerals",
    label: "Supply"
  },
  {
    value: "Undergrad",
    label: "Mentored"
  },
  {
    value: "Faculty",
    label: "Guided"
  }
],

  impactLine: "Responsible AI engineering starts with understanding the infrastructure, energy, materials, people, and lifecycle costs behind the model output.",
},




"Teaching Assistant, Machine Learning": {
  id: "ta-machine-learning",
  title: "Teaching Assistant, Machine Learning",
  category: "Teaching",
  eyebrow: "Machine Learning · Debugging · Reproducibility",

  description:
    "Supported 225+ students in a Machine Learning course at UMass Amherst under Prof. Bruno Castro da Silva, helping debug assignments, review evaluation workflows, and reason through model behavior.",

  instructor: {
    name: "Prof. Bruno Castro da Silva",
    url: "https://people.cs.umass.edu/~bsilva/",
    description:
      "Prof. Bruno is an Assistant Professor at UMass CICS and Co-Director of the Autonomous Learning Lab. His work focuses on reinforcement learning, decision-making, robotics, and AI safety.",
  },

  longDescription:
    "This role strengthened my machine learning foundation from the teaching side. I helped students move beyond getting code to run and toward understanding why a model behaved a certain way, how evaluation metrics should be interpreted, and how to make experiments more reproducible. The work combined technical debugging, assignment review, and clear explanation of ML workflows at scale.",

  problem:
    "Students often struggled with ML bugs that were not obvious syntax errors: incorrect preprocessing, unstable experiments, metric confusion, data leakage, or results that looked plausible but were hard to justify. The challenge was to help them diagnose technical issues and reason clearly about model behavior.",

  built:
    "Provided hands-on support across debugging sessions, assignment review, reproducibility checks, and evaluation guidance. I helped students inspect data pipelines, understand model outputs, compare metrics, interpret experimental results, and improve the clarity of their machine learning submissions.",

  result:
    "Supported a large course environment while building stronger judgment around ML workflows, debugging patterns, and evaluation quality. The experience made me sharper at explaining technical tradeoffs, reviewing code for correctness, and identifying where machine learning experiments can quietly fail.",

  tech: [
    "Machine Learning",
    "Python",
    "Model Evaluation",
    "Debugging",
    "Reproducibility",
    "Experiment Analysis",
    "Assignment Review",
    "Technical Feedback",
    "Student Support"
  ],

  bullets: [
    "Supported 225+ students with machine learning assignments, debugging questions, evaluation workflows, and technical guidance.",
    "Helped students reason through preprocessing issues, model behavior, metric selection, experiment setup, and result interpretation.",
    "Reviewed assignment submissions for correctness, clarity, reproducibility, and alignment with expected ML workflow behavior.",
    "Explained common failure modes such as data leakage, unstable results, incorrect metric usage, and misleading model outputs.",
    "Worked under Prof. Bruno Castro da Silva, whose research spans reinforcement learning, decision-making, robotics, and AI safety."
  ],

  metrics: [
    {
      label: "Students supported",
      value: "225+"
    },
    {
      label: "Course area",
      value: "ML"
    },
    {
      label: "Core support",
      value: "Debugging"
    },
    {
      label: "Review focus",
      value: "Evaluation"
    },
    {
      label: "Quality lens",
      value: "Reproducibility"
    },
    {
      label: "Role",
      value: "TA"
    }
  ],

  impactLine : "Teaching machine learning at scale made debugging, evaluation, and reproducibility feel less like course topics and more like core engineering habits.",
},
};
