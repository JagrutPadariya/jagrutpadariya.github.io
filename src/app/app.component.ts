import { Component } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  group,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(
          ':enter, :leave',
          style({ position: 'absolute', width: '100%' }),
          { optional: true }
        ),
        group([
          query(
            ':leave',
            [
              style({ transform: 'translateY(0%)', opacity: 1 }),
              animate(
                '600ms ease-in-out',
                style({ transform: 'translateY(-100%)', opacity: 0 })
              ),
            ],
            { optional: true }
          ),
          query(
            ':enter',
            [
              style({ transform: 'translateY(100%)', opacity: 0 }),
              animate(
                '600ms ease-in-out',
                style({ transform: 'translateY(0%)', opacity: 1 })
              ),
            ],
            { optional: true }
          ),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'personal-profile';

  prepareRoute(outlet: any) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
