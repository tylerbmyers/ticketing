import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent
} from '@tymytickets/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  readonly subject = Subjects.ExpirationComplete;
}
