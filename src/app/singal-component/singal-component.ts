import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-singal-component',
  standalone: true,
  imports: [],
  templateUrl: './singal-component.html',
  styleUrls: ['./singal-component.scss'],
})
export class SingalComponent {
  quantity = signal(0);
  price = signal(0);
  total = computed(() => {
    debugger;
    return this.quantity() * this.price();
  });
  x: any;
  constructor() {
    this.x = effect(() => {
      console.log('quantity changed:', this.quantity());
      console.log('price changed:', this.price());
    });
  }

  ngOnInit() { }
  incriment() {
    this.quantity.update(v => v + 1);
  }
  incrimentPrice() {
    this.price.update(v => v + 1);
  }
} 
