export type RequestIdResponse = {
  searchId: string;
};

export type Ticket = {
  price: number; // Цена в рублях
  carrier: string; // Код авиакомпании (iata)
  segments: [
    // Массив перелётов.
    {
      origin: string; // Код города (iata)
      destination: string; // Код города (iata)
      date: string; // Дата и время вылета туда
      stops: string[]; // Массив кодов (iata) городов с пересадками
      duration: number; // Общее время перелёта в минутах
    },
    {
      origin: string; // Код города (iata)
      destination: string; // Код города (iata)
      date: string; // Дата и время вылета обратно
      stops: string[]; // Массив кодов (iata) городов с пересадками
      duration: number; // Общее время перелёта в минутах
    }
  ];
};

export type TicketResponse = {
  tickets: Array<Ticket>;
  stop: boolean;
};
