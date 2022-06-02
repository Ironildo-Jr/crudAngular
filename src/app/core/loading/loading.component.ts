import { Component } from '@angular/core';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-loading',
  template: `<div
    class="spinner"
    *ngIf="this.loadingService.isLoading$ | async"
  >
    <mat-spinner mode="indeterminate" color="primary"></mat-spinner>
  </div>`,
  styles: [
    `
      .spinner {
        display: flex;
        position: fixed;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.32);
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 2000;
      }
    `,
  ],
})
export class LoadingComponent {
  constructor(public loadingService: LoadingService) {}
}
