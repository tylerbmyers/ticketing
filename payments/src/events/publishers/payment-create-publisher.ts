import { Subjects, Publisher, PaymentCreatedEvent } from '@tymytickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
