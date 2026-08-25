/* =========================================================
   BCA • SEM 7 • Basics of Generative AI
   UNIT 2 — Adaptation, Multimodal AI, Ethics, Tools & Practice
========================================================= */

import {
    createTopic,
    heading,
    text,
    list,
    code,
    table,
    note,
    definition,
    steps,
    keyPoints,
    mcq,
    qa,
} from "../../../../helpers";

/* =========================================================
   TOPIC 1 — Fine-Tuning, In-Context Learning & Adaptation
========================================================= */

const fineTuningAdaptation = createTopic(
    "fine-tuning-in-context-learning-model-adaptation",
    "Fine-Tuning, In-Context Learning & Model Adaptation",

    [
        definition(
            "Fine-Tuning",
            "Fine-Tuning updates the weights of a pre-trained foundation model using a smaller, domain-specific dataset to adapt behavior for specialized tasks."
        ),

        heading("Fine-Tuning vs In-Context Learning"),

        table(
            ["Aspect", "Fine-Tuning", "In-Context Learning (Prompting)"],
            [
                ["Process", "Updates model weights via gradient descent", "Includes examples in the prompt; no weight change"],
                ["Cost", "Requires GPU compute and time", "Requires only prompt design effort"],
                ["Persistence", "Permanent behavior change", "Temporary; lost with new prompts"],
                ["Use Case", "Domain-specific terminology, brand tone", "Quick task adaptation, pattern matching"]
            ]
        ),

        heading("Parameter-Efficient Fine-Tuning (PEFT)"),

        list([
            "LoRA (Low-Rank Adaptation) — Trains small adapter matrices inserted into attention layers; freezes base weights.",
            "QLoRA — Combines LoRA with 4-bit quantization for training on a single consumer GPU.",
            "Adapter Layers — Small modules inserted between Transformer layers for task-specific adjustments.",
            "Prompt Tuning — Trains only continuous prompt embeddings rather than full weights."
        ]),

        heading("In-Context Learning Example (Few-Shot)"),

        code(
            `# Few-Shot Prompt Example (Conceptual)
# Example 1: Input: "apple" -> Output: "fruit"
# Example 2: Input: "car" -> Output: "vehicle"
# Now classify: Input: "banana" -> Output: ?`,
            "python",
            "Few-Shot Pattern Example"
        ),

        note(
            "Fine-Tuning is best when a company needs a permanent behavior change; In-Context Learning is faster and more flexible for temporary tasks.",
            "tip",
            "Adaptation Strategy Choice"
        ),

        keyPoints([
            "Fine-Tuning updates weights; In-Context Learning changes only the prompt.",
            "LoRA reduces trainable parameters by up to 99% compared to full fine-tuning.",
            "Prompt Tuning trains only input embeddings, not the full model.",
            "Few-Shot prompting improves consistency without any model updates."
        ]),
  ],

{
    summary: "Compare Fine-Tuning and In-Context Learning; explore LoRA, Adapter Layers, and Prompt Tuning; understand when each adaptation strategy applies.",
        minutes: 12,
            tags: ["fine-tuning", "in-context-learning", "lora", "peft", "adaptation", "important"],

                mcqs: [
                    mcq("What does Fine-Tuning change?", ["Only the prompt", "The model weights", "Only the data", "Only the output format"], 1, "Fine-Tuning updates model weights through gradient descent."),
                    mcq("What is LoRA?", ["A database", "Low-Rank Adaptation — trains small adapter matrices", "A programming language", "A type of image"], 1, "LoRA freezes base weights and trains low-rank adapter matrices."),
                    mcq("For temporary task adjustments without GPU costs, which method works best?", ["Full Fine-Tuning", "In-Context Learning", "QLoRA", "Adapter Layers"], 1, "In-Context Learning requires only prompt design, not GPU training.")
                ],

                    questions: [
                        qa("Compare Fine-Tuning and In-Context Learning across process, cost, persistence, and best use cases.", "Fine-Tuning updates weights, requires GPU/time, is permanent, and suits domain specialization (e.g., legal language). In-Context Learning inserts examples in prompts, costs nothing in compute, is temporary, and suits quick experiments. Fine-Tuning is preferred for production-level specialization; In-Context Learning is preferred for rapid prototyping."),
                        qa("What is LoRA and why is it important for practical fine-tuning?", "LoRA freezes all pre-trained weights and trains only small adapter matrices inserted into attention layers, reducing trainable parameters by ~99%. It makes fine-tuning feasible on consumer GPUs with minimal storage, making customization accessible without enterprise compute clusters.")
                    ],
  }
);

/* =========================================================
   TOPIC 2 — Multimodal AI & Cross-Modal Understanding
========================================================= */

const multimodalAI = createTopic(
    "multimodal-ai-cross-modal-understanding",
    "Multimodal AI & Cross-Modal Understanding",

    [
        definition("Multimodal AI", "Systems that process and generate content across text, image, audio, video, and other modalities within a unified architecture."),

        heading("Cross-Modal Tasks"),
        table(
            ["Task", "Description", "Example"],
            [
                ["Text-to-Image", "Generate images from text descriptions", "Prompt: 'A futuristic city' → Image"],
                ["Image-to-Text (Captioning)", "Generate descriptions from images", "Image → 'A beach at sunset'"],
                ["Audio-to-Text (ASR)", "Transcribe speech to text", "Recording → Written transcript"],
                ["Visual Question Answering (VQA)", "Answer questions about image content", "Image of chart → 'Sales increased 25%'"]
            ]
        ),

        definition("CLIP", "Contrastive Language-Image Pre-training (CLIP) learns joint embeddings for text and images using 400M image-text pairs, enabling zero-shot matching and retrieval."),

        heading("Multimodal Challenges"),
        table(
            ["Challenge", "Description", "Mitigation"],
            [
                ["Data Alignment", "Matching corresponding text, image, audio pairs", "Curated multimodal datasets (LAION-5B)"],
                ["Bias", "Cultural stereotypes embedded in visual/text data", "Diverse global data curation"],
                ["Compute Cost", "High-dimensional multimodal inputs demand resources", "Quantization, pruning, adapter layers"],
                ["Cross-Modal Hallucination", "Describing objects not present in images", "Grounding techniques linking outputs to input regions"]
            ]
        ),

        keyPoints([
            "Multimodal AI integrates text, image, audio, and video understanding.",
            "CLIP uses contrastive learning to align text and image embeddings.",
            "Vision-Language Models combine image encoders with language decoders.",
            "Cross-modal hallucination requires grounding and verification techniques."
        ]),
  ],

{
    summary: "Explore Multimodal AI: cross-modal tasks (text-to-image, VQA), CLIP architecture, Vision-Language Models, and challenges including alignment and hallucination.",
        minutes: 12,
            tags: ["multimodal-ai", "clip", "vision-language-models", "cross-modal", "important"],

                mcqs: [
                    mcq("What does CLIP use to align text and images?", ["Reinforcement", "Contrastive Learning", "Backpropagation only", "Random pairing"], 1, "CLIP uses contrastive learning to align embeddings."),
                    mcq("What is Visual Question Answering?", ["Only image generation", "Answering questions about image content", "Only audio transcription", "Only text translation"], 1, "VQA combines vision and NLP to answer image-based questions."),
                    mcq("What is Cross-Modal Hallucination?", ["Audio distortion", "Describing objects not present in an image", "Slow processing", "Data misalignment"], 1, "Cross-modal hallucination refers to inaccurate visual descriptions.")
                ],

                    questions: [
                        qa("What is Multimodal AI and how does it differ from text-only LLMs?", "Multimodal AI processes text, images, audio, and video within a single model. Text-only LLMs handle only tokens; multimodal models include image/audio encoders that convert non-text inputs into embeddings the language model can interpret, enabling tasks like image captioning and visual reasoning."),
                        qa("How does CLIP enable text-to-image retrieval?", "CLIP trains separate encoders for text and images on paired data using contrastive learning. It maximizes similarity for matching pairs and minimizes it for mismatched pairs. Once trained, any image and any text can be embedded into a shared space, allowing retrieval by computing cosine similarity between embeddings.")
                    ],
  }
);

/* =========================================================
   TOPIC 3 — Responsible AI, Governance & Ethics
========================================================= */

const responsibleAIGovernance = createTopic(
    "responsible-ai-governance-ethics",
    "Responsible AI, Governance & Ethics",

    [
        heading("Five Principles of Responsible AI"),
        table(
            ["Principle", "Meaning", "Application"],
            [
                ["Fairness", "Avoid biased outputs across groups", "Diverse data, fairness audits"],
                ["Transparency", "Explainable model behavior", "Model cards, documentation"],
                ["Accountability", "Clear responsibility for outcomes", "Governance boards, audit trails"],
                ["Safety", "Prevent harmful outputs", "Safety filters, red-teaming"],
                ["Privacy", "Protect user data", "Differential privacy, minimal retention"]
            ]
        ),

        heading("Governance Frameworks"),
        list([
            "NIST AI Risk Management Framework (RMF) — U.S. standard for risk identification and mitigation.",
            "EU AI Act — European regulation classifying AI by risk level (minimal, limited, high, unacceptable).",
            "ISO/IEC 42001 — International standard for AI management systems emphasizing governance and accountability."
        ]),

        heading("Ethical Challenges in Generative AI"),
        table(
            ["Issue", "Description", "Mitigation"],
            [
                ["Bias", "Training data reflects societal biases", "Diverse curation, bias detection tools"],
                ["Hallucination", "Plausible but false content generation", "RAG, citation requirements, fact-checking"],
                ["Copyright", "Training on copyrighted material", "Transparent sourcing, licensing compliance"],
                ["Deepfakes", "Synthetic media for misinformation", "Watermarking, provenance tracking, detection algorithms"],
                ["Environmental Impact", "High energy consumption during training", "Efficient architectures, renewable energy data centers"]
            ]
        ),

        note("Governance is not optional; it is becoming a legal and business requirement for AI deployment.", "warning", "Governance Priority"),

        keyPoints([
            "Responsible AI requires fairness, transparency, accountability, safety, and privacy.",
            "Governance frameworks provide structured risk assessment and mitigation.",
            "Ethical risks include bias, hallucination, copyright, deepfakes, and energy consumption.",
            "Mitigation requires diverse data, transparency, auditing, and efficient design."
        ]),
  ],

{
    summary: "Explore Responsible AI principles, global governance frameworks (NIST RMF, EU AI Act, ISO 42001), and ethical challenges including bias, hallucination, and deepfakes.",
        minutes: 11,
            tags: ["responsible-ai", "governance", "ethics", "bias", "hallucination", "deepfakes", "important"],

                mcqs: [
                    mcq("Which principle focuses on making model behavior understandable?", ["Fairness", "Transparency", "Accountability", "Safety"], 1, "Transparency requires explainable behavior."),
                    mcq("What does the EU AI Act classify?", ["AI systems by risk level", "Only image generators", "Only text translators", "Only chatbots"], 0, "The EU AI Act classifies AI by risk: minimal, limited, high, unacceptable."),
                    mcq("What is Hallucination in Generative AI?", ["Creating images", "Generating plausible but false content", "Only translating text", "Only summarizing"], 1, "Hallucination refers to fabricated but believable outputs."),
                    mcq("Which framework is the U.S. standard for AI risk management?", ["ISO 42001", "EU AI Act", "NIST AI RMF", "GDPR"], 2, "NIST AI RMF is the U.S. framework for AI risk assessment.")
                ],

                    questions: [
                        qa("Explain the five principles of Responsible AI and why each matters.", "Fairness prevents discrimination; Transparency builds trust and enables auditing; Accountability ensures responsibility for harm; Safety prevents malicious or dangerous outputs; Privacy protects user data. Together they ensure AI is beneficial, trustworthy, and aligned with societal values."),
                        qa("Compare the EU AI Act and NIST AI RMF. How do they complement each other?", "The EU AI Act is a binding regulation that assigns risk categories and mandates compliance (especially for high-risk systems). NIST AI RMF is a voluntary framework providing detailed processes for risk identification, assessment, and mitigation. Organizations can use NIST RMF to implement practices that satisfy EU AI Act requirements.")
                    ],
  }
);

/* =========================================================
   TOPIC 4 — Generative AI Tools, APIs & Platforms
========================================================= */

const toolsPlatforms = createTopic(
    "generative-ai-tools-apis-and-platforms",
    "Generative AI Tools, APIs & Platforms",

    [
        heading("Text Generation Platforms"),
        table(
            ["Platform / Model", "Provider", "Key Feature"],
            [
                ["ChatGPT / GPT-4", "OpenAI", "Multimodal (text + image), plugins, custom GPTs"],
                ["Claude", "Anthropic", "Long context window (up to 200K tokens), safety-focused"],
                ["Gemini", "Google", "Multimodal integration with Google Workspace and Search"],
                ["LLaMA (Open Source)", "Meta", "Open-source, customizable, deployable locally"]
            ]
        ),

        heading("Image and Video Generation Platforms"),
        table(
            ["Platform", "Provider", "Notable Capability"],
            [
                ["Midjourney", "Midjourney Inc.", "High-quality artistic image generation via Discord/API"],
                ["DALL-E 3", "OpenAI", "Integrated with ChatGPT for conversational image creation"],
                ["Stable Diffusion", "Stability AI", "Open-source; runs locally or via cloud APIs"],
                ["Runway Gen-2", "Runway", "Text-to-video and video-to-video generation"]
            ]
        ),

        heading("Developer APIs and Integration Patterns"),
        list([
            "OpenAI API — Access GPT-4, DALL-E, Whisper via REST endpoints.",
            "Anthropic Claude API — Access Claude for long-document analysis and safe responses.",
            "Hugging Face Hub — Download and deploy open-source models (LLaMA, Stable Diffusion, BERT) locally or via cloud.",
            "LangChain / LlamaIndex — Frameworks for building applications that combine LLMs with external data sources and tools."
        ]),

        heading("Integration Example: Calling an LLM API"),
        code(
            `# Example: Using OpenAI Python SDK for a chat completion
import openai

openai.api_key = "your-api-key"

response = openai.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": "You are a helpful BCA tutor."},
        {"role": "user", "content": "Explain tokenization briefly."}
    ],
    temperature=0.2,
    max_tokens=150
)

print(response.choices[0].message.content)`,
            "python",
            "LLM API Integration Example"
        ),

        note(
            "Always store API keys securely using environment variables or secret managers; never hardcode them in source files or commit them to version control.",
            "warning",
            "API Key Security"
        ),

        keyPoints([
            "Major text platforms include ChatGPT, Claude, Gemini, and open-source LLaMA.",
            "Image/video platforms include Midjourney, DALL-E, Stable Diffusion, and Runway.",
            "Developer APIs (OpenAI, Anthropic, Hugging Face) enable custom application integration.",
            "Frameworks like LangChain help connect LLMs to external data and tools securely."
        ]),
  ],

{
    summary: "Review major Generative AI platforms (text, image, video) and understand API integration patterns and security practices for developer applications.",
        minutes: 11,
            tags: ["tools", "apis", "openai", "claude", "langchain", "development", "important"],

                mcqs: [
                    mcq("Which platform is open-source and deployable locally?", ["ChatGPT", "Gemini", "LLaMA", "Midjourney"], 2, "LLaMA (Meta) is open-source and can be deployed locally or on private servers."),
                    mcq("What is the primary function of LangChain?", ["Generate images", "Connect LLMs with external data and tools", "Create videos", "Translate only"], 1, "LangChain is a framework for building applications that integrate LLMs with external systems."),
                    mcq("Which parameter in LLM APIs controls output randomness?", ["Max Length", "Temperature", "Batch Size", "Resolution"], 1, "Temperature controls the randomness and creativity of generated output."),
                    mcq("Why should API keys never be committed to version control?", ["To save storage", "To prevent unauthorized access and security breaches", "To make code faster", "To improve formatting"], 1, "Exposed keys allow malicious actors to use your account and incur costs.")
                ],

                    questions: [
                        qa("Compare ChatGPT (OpenAI) and Claude (Anthropic) in terms of features and use cases.", "ChatGPT offers multimodal input (text + image), plugins, custom GPTs, and broad integration (Microsoft, mobile apps). Claude excels with a longer context window (up to 200K tokens for document analysis) and is designed with stronger safety guardrails, making it suitable for sensitive business and legal applications where output reliability is critical."),
                        qa("How does the OpenAI API allow developers to integrate LLM capabilities into custom applications?", "The OpenAI API provides REST endpoints for chat completions, embeddings, image generation (DALL-E), and audio transcription. Developers send structured JSON requests (model, messages, temperature) and receive generated content in JSON responses. Integration frameworks like LangChain simplify connecting these outputs to databases, search engines, and external APIs for full-stack applications.")
                    ],
  }
);

/* =========================================================
   TOPIC 5 — Hands-On Practice: Building GenAI Applications
========================================================= */

const handsOnPractice = createTopic(
    "hands-on-practice-building-genai-applications",
    "Hands-On Practice: Building GenAI Applications",

    [
        heading("Mini-Project: Simple Text Summarization Application"),

        steps([
            "Define Requirement: Accept user-provided text; output a concise summary in 2-3 sentences.",
            "Choose Model: Use an open-source LLM (e.g., LLaMA-3 via Hugging Face) or API (OpenAI/Anthropic).",
            "Design Prompt: 'Summarize the following text in 2-3 sentences: [text input]'",
            "Implement Input Validation: Ensure text is within token limits; sanitize for injection risks.",
            "Generate and Display: Call API/model, display summary with attribution (e.g., 'Generated by [Model Name]').",
            "Evaluate: Compare generated summary with original for accuracy and coherence; adjust temperature or prompt."
        ]),

        heading("Mini-Project: Image Caption Generator (Conceptual)"),

        steps([
            "Select a vision-language model (e.g., CLIP for retrieval, or a VLM for captioning).",
            "Input: User uploads an image file.",
            "Processing: Model processes image embeddings and generates descriptive text.",
            "Output: Display caption alongside the image with option to regenerate using different styles (e.g., 'formal', 'poetic')."
        ]),

        heading("Mini-Project: Basic RAG Demo (Conceptual)"),

        steps([
            "Build a small knowledge base (e.g., 20-30 paragraphs about college policies).",
            "Generate embeddings for each paragraph using an embedding model.",
            "Store embeddings in a simple vector database or array.",
            "When user asks a question, embed the query, retrieve top 3 matching paragraphs.",
            "Construct prompt: 'Answer using only the following context: [retrieved paragraphs]. Question: [user query]'.",
            "Generate answer with citation to source paragraphs."
        ]),

        note(
            "For internship or academic evaluation, focus on clear requirements, proper prompt design, basic error handling, security awareness (API keys, input sanitization), and documentation of results — not production-scale deployment.",
            "tip",
            "Academic Focus"
        ),

        keyPoints([
            "Hands-on projects reinforce concepts: prompting, API integration, validation, and evaluation.",
            "Simple RAG demonstrates retrieval, embedding, and context-enriched generation.",
            "Image captioning introduces multimodal input processing concepts.",
            "Every mini-project should include a brief evaluation comparing output quality."
        ]),
  ],

{
    summary: "Apply Generative AI concepts through hands-on mini-projects: text summarization, image captioning, and basic RAG, emphasizing prompt design, validation, and documentation.",
        minutes: 11,
            tags: ["hands-on", "project", "rag", "multimodal", "summarization", "practice", "important"],

                mcqs: [
                    mcq("In a basic RAG demo, what is the purpose of embedding the query?", ["To make it faster", "To find similar paragraphs in a knowledge base", "To translate it", "To delete it"], 1, "Embedding the query allows similarity comparison with stored document embeddings."),
                    mcq("What should be included in a basic GenAI project evaluation?", ["Only code syntax", "Prompt design, security awareness, and output quality comparison", "Only image size", "Only translation speed"], 1, "Evaluation should cover prompt quality, security, and result accuracy."),
                    mcq("Why is input sanitization important in GenAI applications?", ["To make output faster", "To prevent prompt injection and malicious instructions", "To change colors", "To add images"], 1, "Input sanitization protects against prompt injection attacks."),
                    mcq("What is the final step in a summarization mini-project?", ["Delete the model", "Evaluate generated summary against original for accuracy", "Only display original text", "Change database"], 1, "Evaluation compares generated output with the source for coherence and accuracy.")
                ],

                    questions: [
                        qa("Design the steps for a basic RAG application using a small document set.", "Steps: (1) Create a knowledge base (20-30 paragraphs). (2) Generate embeddings for all paragraphs. (3) Store embeddings with their text in an array or simple database. (4) When a user asks a question, embed the question and retrieve the top 3 closest paragraphs. (5) Build a prompt combining retrieved context and the question. (6) Generate the answer and cite source paragraphs. (7) Evaluate answer accuracy against retrieved context."),
                        qa("Why is prompt design critical in hands-on GenAI projects, and how should students evaluate their results?", "Prompt design determines output quality, format, and reliability. Poor prompts cause ambiguity or errors. Students should evaluate results by comparing outputs to source data, checking for hallucination, measuring coherence, and documenting which prompt variations improved results. Documentation of this evaluation process demonstrates critical understanding and professional practice.")
                    ],
  }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    fineTuningAdaptation,
    multimodalAI,
    responsibleAIGovernance,
    toolsPlatforms,
    handsOnPractice,
];