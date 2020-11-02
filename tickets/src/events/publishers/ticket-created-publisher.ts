import { Publisher, Subjects, TicketCreatedEvent } from '@tymytickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
