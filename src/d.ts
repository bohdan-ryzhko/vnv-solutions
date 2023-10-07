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