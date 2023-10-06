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
};

export type ServicesSliceType = {
  services: Service[],
  currentPage: number,
  isLoad: boolean,
  error: unknown,
}
