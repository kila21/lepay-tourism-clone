export interface ToursType {
  name: string;
  place: string;
  img: string;
  page: {
    routeName: string;
    route: string;
    headline: string;
    slider: string[];
    content: contentType[];
  };
}

interface contentType {
  header: string;
  text: string[];
}
