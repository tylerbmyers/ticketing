import { Publisher, Subjects, TicketUpdatedEvent } from '@tymytickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
