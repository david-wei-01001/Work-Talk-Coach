# Project Description: WorkTalk Coach (职场沟通教练)

**WorkTalk Coach** is a professional business English communication platform designed specifically for Chinese-speaking professionals. Unlike traditional language apps that focus on rote vocabulary memorization, WorkTalk Coach bridges the gap between "knowing English" and "communicating professionally" in high-stakes workplace scenarios such as job interviews, global meetings, and cross-cultural collaborations.

### The Problem It Solves
Many professionals possess a decent grasp of English grammar but struggle with the **tone**, **nuance**, and **professional register** required in a corporate environment. They often sound too blunt, overly formal, or imprecise. We built WorkTalk Coach to provide a "safe harbor" for repetitive practice, where AI coaches provide the immediate, specific, and actionable feedback that a human mentor might not always have time to give.

### Building with MeDo: The Process
We used MeDo to architect the entire application from a conceptual PDF specification into a fully functional, multi-page Web App.
- **Strategic Prompting**: We structured my conversations with MeDo to first establish a robust data model for the 71+ practice tasks and then iteratively built the UI components using React, shadcn/ui, and Tailwind CSS.
- **Iterative Refinement**: We started with a simple prototype and progressively "leveled up" the features. For instance, when we realized the voice feedback was too generic, we prompted MeDo to design a complex 5-dimension rubric, which required sophisticated logic in both the frontend and the backend Edge Functions.

### The Most Impressive Feature: 5-Dimension Voice Assessment
The standout feature is the **AI-Powered Voice Assessment System**. When a user records themselves responding to a workplace scenario (e.g., handling a difficult question in an interview), MeDo helped us create a seamless integration that:
1. **Transcribes** the speech using Speech-to-Text (STT).
2. **Analyzes** the input against a professional reference using a Large Language Model (LLM).
3. **Generates a "Coach's Report"** scoring the user on Content Completeness, Vocabulary Accuracy, Fluency, Grammar, and Professionalism.
The most impressive part is the **"Upgrade Logic"**—the AI doesn't just say you're wrong; it provides a specific "Before → After" comparison (e.g., upgrading *"I will do it today"* to *"I'll make it a priority to wrap this up by EOD"*) with an explanation of why the latter is more professional.

### Extending Functionality with Plugins
MeDo’s integration with **Supabase Edge Functions** was critical for security and performance. By routing STT and LLM calls through an Edge Function, we kept API keys secure while enabling complex SSE (Server-Sent Events) streaming for the AI's feedback. This allowed the app to handle audio files and generate multi-layered feedback reports in seconds, creating a truly interactive "live coach" experience.

---

**WorkTalk Coach** isn't just a learning tool; it's a bridge to career confidence, powered by the precise execution and creative problem-solving of MeDo.
