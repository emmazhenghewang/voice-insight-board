
import InterviewHeader from "@/components/InterviewHeader";
import SummaryCard from "@/components/SummaryCard";
import FeedbackTable from "@/components/FeedbackTable";

const Index = () => {
  const behavioralQuestions = [
    {
      question: "Question 1: Tell me about a time when you faced a challenging situation at work.",
      criteria: [
        {
          name: "STAR Framework",
          feedback: "Candidate provided a clear situation and task, but action steps could be more detailed. The results were well articulated.",
          score: "good",
        },
        {
          name: "Ability to Answer",
          feedback: "Answered confidently with minimal hesitation, though some tangents occurred.",
          score: "good",
        },
        {
          name: "Communication",
          feedback: "Used clear language and maintained good pace, but could improve on conciseness.",
          score: "average",
        },
        {
          name: "Alignment",
          feedback: "Example aligned well with the question and demonstrated relevant skills.",
          score: "excellent",
        },
        {
          name: "Emotion and Attitude",
          feedback: "Displayed enthusiasm and a positive attitude throughout the response.",
          score: "excellent",
        },
      ],
    },
    {
      question: "Question 2: Describe a situation where you had to work with a difficult team member.",
      criteria: [
        {
          name: "STAR Framework",
          feedback: "Strong on situation and task, but could improve on detailing the actions taken.",
          score: "average",
        },
        {
          name: "Ability to Answer",
          feedback: "Showed good understanding of the question but took time to formulate thoughts.",
          score: "good",
        },
        {
          name: "Communication",
          feedback: "Clear articulation but occasionally used filler words.",
          score: "good",
        },
        {
          name: "Alignment",
          feedback: "The example was relevant and showcased conflict resolution skills.",
          score: "good",
        },
        {
          name: "Emotion and Attitude",
          feedback: "Maintained a professional tone while discussing a challenging situation.",
          score: "excellent",
        },
      ],
    },
    {
      question: "Question 3: Tell me about a time when you had to adapt to a significant change.",
      criteria: [
        {
          name: "STAR Framework",
          feedback: "Well-structured answer with clear situation and actions, but results could be more specific.",
          score: "good",
        },
        {
          name: "Ability to Answer",
          feedback: "Responded directly to the question with a relevant example.",
          score: "excellent",
        },
        {
          name: "Communication",
          feedback: "Articulated thoughts clearly with good pacing and minimal filler words.",
          score: "excellent",
        },
        {
          name: "Alignment",
          feedback: "Example demonstrated adaptability and flexibility as requested.",
          score: "excellent",
        },
        {
          name: "Emotion and Attitude",
          feedback: "Displayed a positive mindset toward change and challenges.",
          score: "good",
        },
      ],
    },
  ];

  const jobSpecificQuestions = [
    {
      question: "Question 4: How would your experience with data analysis tools help you in this role?",
      criteria: [
        {
          name: "STAR Framework",
          feedback: "Provided strong examples with clear actions and results showing impact.",
          score: "excellent",
        },
        {
          name: "Technical Knowledge",
          feedback: "Demonstrated in-depth knowledge of SQL, Python, and visualization tools.",
          score: "excellent",
        },
        {
          name: "Relevance to Role",
          feedback: "Drew clear connections between past experience and job requirements.",
          score: "good",
        },
      ],
    },
    {
      question: "Question 5: Describe how you would approach implementing a new project management system.",
      criteria: [
        {
          name: "STAR Framework",
          feedback: "Answer lacked structure, particularly in defining actions and results.",
          score: "needs-work",
        },
        {
          name: "Problem-Solving Approach",
          feedback: "Showed logical thinking but could provide more specific strategies.",
          score: "average",
        },
        {
          name: "Stakeholder Management",
          feedback: "Good consideration of different stakeholders and their needs.",
          score: "good",
        },
      ],
    },
  ];

  return (
    <div className="container py-8">
      <div className="mb-8">
        <InterviewHeader
          candidateName="Alex Johnson"
          position="Senior Product Manager"
          date="April 29, 2025"
          overallFeedback="Alex demonstrated strong communication skills and provided structured responses to most questions. Their examples showed good alignment with the role requirements, particularly in areas of team collaboration and adaptability. Areas for improvement include providing more detailed action steps in the STAR framework and more specific technical examples for job-specific questions."
        />
      </div>

      <h2 className="text-xl font-bold mb-4">Performance Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <SummaryCard
          title="STAR Framework"
          score={78}
          description="Good structure in responses, but could improve on detailing actions."
        />
        <SummaryCard
          title="Communication Skills"
          score={85}
          description="Strong articulation with clear language and good pacing."
        />
        <SummaryCard
          title="Role Alignment"
          score={82}
          description="Examples demonstrate good fit with position requirements."
        />
        <SummaryCard
          title="Technical Knowledge"
          score={68}
          description="Shows appropriate skills but lacks depth in some key areas."
        />
      </div>

      <h2 className="text-xl font-bold mb-4">Behavioral Questions (1-3)</h2>
      <div className="space-y-6 mb-8">
        {behavioralQuestions.map((q, index) => (
          <FeedbackTable key={index} question={q.question} criteria={q.criteria} />
        ))}
      </div>

      <h2 className="text-xl font-bold mb-4">Job-Specific Questions (4-5)</h2>
      <div className="space-y-6">
        {jobSpecificQuestions.map((q, index) => (
          <FeedbackTable key={index} question={q.question} criteria={q.criteria} />
        ))}
      </div>
    </div>
  );
};

export default Index;
