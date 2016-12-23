import {ComponentFixture, TestBed, async} from '@angular/core/testing';
import {By}              from '@angular/platform-browser';
import {DebugElement}    from '@angular/core';

import {DateComponent} from './date.component';
import {AuthService} from '../../../../auth.service'
''

describe('DateComponent', () => {
    let comp: DateComponent;
    let fixture: ComponentFixture<DateComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    // async before each
    beforeEach(async(() => {
        /**
         * TestBed - creates an Angular testing module — an @NgModule class — that you configure with the
         * configureTestingModule method to produce the module environment for the class you want to test.
         * */

        let userServiceStub = {
            isLoggedIn: true,

            user: {name: 'Test User'}
        };

        TestBed.configureTestingModule({
            declarations: [DateComponent], // declare the test component
            providers: [
                // use fake AuthService, which DateComponent is required
                {
                    provide: AuthService,
                    useValue: userServiceStub
                }
            ]
        });
    }));

    // sync beforeEach after async
    beforeEach(() => {
        fixture = TestBed.createComponent(DateComponent);

        comp = fixture.componentInstance; // BannerComponent test instance

        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    });

    it('no title in the DOM until manually call `detectChanges`', () => {
        expect(el.textContent).toEqual('');
    });

    it('should display original title', () => {
        fixture.detectChanges();

        expect(el.textContent).toContain(comp.title);
    });

    it('should display a different test title', () => {
        comp.title = 'Test Title';

        fixture.detectChanges();

        expect(el.textContent).toContain('Test Title');
    });
});