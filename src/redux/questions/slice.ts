import { createSlice } from "@reduxjs/toolkit";
import { QuestionsSliceType } from "../../d";

const initialState: QuestionsSliceType = {
  questions: [
    { question: "Is it necessary to sign a contract before work?", answer: "Yes, after discussing the work plan, we sign a contract together using a digital signature.", id: "1" },
    { question: "How is the payment made?", answer: "There are two payment options: full prepayment and stage-by-stage prepayment. Full prepayment involves transferring the entire amount for the project upfront. Stage-by-stage prepayment involves paying in installments for each stage (or several stages).", id: "2" },
    { question: "Is it possible to refund money after payment?", answer: "Yes, it is possible. Here's how it works: in any case, a 5% fee and bank commission are deducted from the refund amount. Money is refunded only for the project stages that have not been started. All work that has been completed and paid for is delivered to the client. Stages that have been started are always completed (if the client wishes).", id: "3" },
    { question: "Can you improve an existing website?", answer: "No, only create a website from scratch. An existing website can be used as an example for design, content, and other aspects, but it does not reduce the cost of the service.", id: "4" },
    { question: "Can you choose only one stage, not the entire service?", answer: "No, it is only possible to order a full-fledged service. In some cases, with the client's consent and prior discussion, it is possible to exclude 1-2 stages from the service. The cost of a project with fewer work stages is reduced.", id: "5" },
  ],
}

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
});

export const questionsReducer = questionsSlice.reducer;
