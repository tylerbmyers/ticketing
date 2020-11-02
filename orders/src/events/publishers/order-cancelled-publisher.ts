import { Publisher, OrderCancelledEvent, Subjects } from '@tymytickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
