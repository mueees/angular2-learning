import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By}              from '@angular/platform-browser';
import {DebugElement}    from '@angular/core';

import {DateComponent} from './date.component';

describe('DateComponent', () => {
    let comp: DateComponent;
    let fixture: ComponentFixture<DateComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        /**
         * TestBed - creates an Angular testing module — an @NgModule class — that you configure with the
         * configureTestingModule method to produce the module environment for the class you want to test.
         * */

        TestBed.configureTestingModule({
            declarations: [DateComponent], // declare the test component
        });

        fixture = TestBed.createComponent(DateComponent);

        comp = fixture.componentInstance; // BannerComponent test instance

        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    });

    it('should display original title', () => {
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.title);
    });
});