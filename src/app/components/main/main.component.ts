import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {ChildComponent} from "../child/child.component";


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ChildComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{
  @Input() asd: number;
  @ViewChild("inp") myInput: ElementRef

  @ViewChild(ChildComponent) child: ChildComponent
  constructor() {
    console.log("constructor")
  }



  ngOnChanges(changes: SimpleChanges): void {
        console.log("ngOnChanges")
    }
    ngOnInit(): void {
        console.log("ngOnInit")
    }

  ngAfterViewInit(): void {
    console.log(this.myInput.nativeElement.value);
    this.child.name = "Max";
    this.child.gritting();
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }


}
