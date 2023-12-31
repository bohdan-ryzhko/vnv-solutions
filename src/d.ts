export type Benefit = {
  image: string,
  text: string,
}

export type Service = {
  title: string,
  description: string,
  benefits: Benefit[],
  benefitTitle: string,
  image: string,
  id: string,
};

export type ServicesSliceType = {
  services: Service[],
  currentService: number,
  isLoad: boolean,
  error: unknown,
}

export type Question = {
  question: string,
  answer: string,
  id: string,
}

export type QuestionsSliceType = {
  questions: Question[],
}

export type ConnectSliceType = {
  isLoad: boolean,
  error: unknown,
  data: ContactsValues | null,
}

export type ContactsValues = {
  name: string;
  phone: string,
  comment: string,
  option: string,
  email: string,
  id?: string,
}
