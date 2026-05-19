# WorkTalk Coach: Elevating Professional Presence

## Inspiration
For many non-native English speakers, especially Chinese professionals, the "Glass Ceiling" in global companies isn't just about technical skill—it is about the **Communication Gap**. We noticed that while many possess a high level of written proficiency, they struggle with the **professional register** and **nuance** required in high-stakes environments. We were inspired to build a tool that doesn't just teach "English," but teaches "Professionalism." We wanted to create a "safe harbor" where users could fail, iterate, and refine their executive presence without the pressure of a real boardroom.

## What it does
WorkTalk Coach is a specialized web application that provides scenario-based business English training. It guides users through four career-critical paths: **Job Preparation**, **New Hire Integration**, **Advanced Communication**, and **Management Leadership**. 
*   **Scenario Simulations**: Users respond to realistic workplace prompts via voice recording.
*   **5-Dimension AI Assessment**: An integrated AI engine evaluates recordings based on Content, Vocabulary, Fluency, Grammar, and Professionalism.
*   **Phrase Upgrades**: The app provides direct "Before → After" examples, showing users how to transform basic, literal English into high-impact business communication.
*   **Curated Knowledge**: Each unit is paired with expert resources from institutions like Harvard Business Review and MIT.

## How we built it
The project is built on a modern full-stack architecture:
*   **Frontend**: React + TypeScript + Tailwind CSS for a responsive, accessible UI. We used `shadcn/ui` for a polished, professional aesthetic.
*   **Backend & Serverless**: Supabase Edge Functions manage the integration between the client and AI services.
*   **AI Engine**: We integrated Gemini 2.5 Flash for intelligent analysis and Speech-to-Text for transcription.
*   **Scoring Logic**: We developed a complex prompt engineering system to ensure the AI acts as a "Senior Business Coach," providing nuanced feedback rather than just grammar checks.
*   **Mathematical Precision**: To calculate the `overall_score`, we use a weighted average of the five dimensions:
    $$Score_{overall} = \frac{1}{n} \sum_{i=1}^{n} w_i \cdot s_i$$
    where $s_i$ is the score for dimension $i$ and $w_i$ is the importance weight assigned to that competency.

## Challenges we ran into
*   **The "Nuance" Problem**: Traditional NLP models often miss "hedging language" or tone. We faced significant challenges in fine-tuning the AI to recognize when a phrase was grammatically correct but culturally blunt or unprofessional.
*   **Audio Handling**: Processing raw audio streams in a browser environment across different devices required robust error handling and specialized MediaRecorder configurations.
*   **JSON Reliability**: Getting a Large Language Model to consistently output structured JSON for complex, 5-dimension feedback required multiple iterations of prompt refinement and validation guards.

## Accomplishments that we're proud of
*   **The "Phrase Upgrade" Feature**: We succeeded in creating a feedback loop that feels like a real conversation with a mentor. Seeing the AI successfully suggest an "executive version" of a user's input is incredibly rewarding.
*   **Zero-Error Deployment**: Maintaining a lint-clean, production-ready codebase throughout 19+ versions of rapid iteration.
*   **Holistic Curriculum**: Designing 72+ unique practice tasks that cover the entire lifecycle of a professional career.

## What we learned
*   **AI as a Coach, Not a Critic**: We learned that for learners, encouragement is just as important as correction. We structured the AI feedback to always include "Strengths" and "Encouragement" to keep users motivated.
*   **State Management in Scenario-Based Apps**: Managing the state of recording, transcribing, and assessing while keeping the UI responsive taught us a lot about asynchronous React patterns.
*   **Prompt Engineering**: We discovered that the quality of AI feedback is 90% dependent on the persona defined in the system instructions.

## What's next for WorkTalk Coach
*   **Real-time Mock Interviews**: Moving from asynchronous recording to a live, conversational AI agent that can ask follow-up questions.
*   **Community Benchmarking**: Allowing users to see how their "Professionalism Score" compares to industry standards.
*   **B2B Integration**: Partnering with global HR departments to use WorkTalk Coach as an onboarding tool for international hires.
