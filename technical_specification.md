# Project Specifications: WorkTalk Coach (职场沟通教练)

**WorkTalk Coach** is a specialized web application designed for professional English communication training. The platform utilizes a scenario-based learning architecture integrated with AI-driven voice analysis to improve workplace linguistic competence.

## Core Functional Architecture

### 1. Curated Learning Paths
The system is divided into four distinct career-stage tracks, each containing six structured modules:
*   **Path 1: Prepare for a Job** – Focuses on recruitment cycles, STAR-method interviews, and follow-up communication.
*   **Path 2: Start Your Role** – Covers onboarding, introduction protocols, workplace small talk, and basic email etiquette.
*   **Path 3: Communicate Better** – Addresses cross-functional collaboration, client management, and professional presentations.
*   **Path 4: Grow into a Manager** – Focuses on leadership communication, delegation, feedback delivery, and stakeholder management.

### 2. Scenario Practice Engine
Each learning unit includes specific simulated workplace scenarios.
*   **Instructional Context**: Defined situational prompts (e.g., "Respond to a client deadline change").
*   **Reference Examples**: High-quality linguistic models provided for comparison.
*   **Voice Recording**: Integrated browser-based audio capture for student responses.

### 3. Five-Dimension AI Assessment
A serverless backend processing engine (Supabase Edge Functions) performs real-time analysis of user recordings using Speech-to-Text (STT) and Large Language Models (LLM):
*   **Content Completeness**: Measures coverage of key situational points.
*   **Vocabulary Accuracy**: Evaluates precision and professional register.
*   **Fluency**: Assesses flow, rhythm, and structural coherence.
*   **Grammar**: Identifies specific errors with immediate corrections.
*   **Professionalism**: Analyzes tone, hedging language, and corporate etiquette.

### 4. Upgrade Logic & Feedback
*   **Transcription Mapping**: Displays exact transcribed text for user review.
*   **Specific Improvements**: Provides "Before → After" phrasing upgrades to replace basic English with high-impact business terminology.
*   **Pronunciation Correction**: Identifies mispronounced words with integrated click-to-play audio models.

### 5. External Resource Integration
Each module is linked to a database of curated external resources (e.g., HBR, MIT Career Advising, British Council). Each resource is indexed by:
*   **Resource Name & URL**
*   **Material Type** (e.g., Podcast, Article, Template)
*   **Target Competency** (What specific skill it addresses)
*   **Recommendation Rationale** (Strategic value to the current unit)

### 6. Progress Tracking
*   **Persistence**: Saves completion status for units and paths.
*   **Visual Dashboards**: Progress bars indicating percentage completion per path.
