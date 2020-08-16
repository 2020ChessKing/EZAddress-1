class Form1
{
    constructor()
    {
      this.input1  = createInput("Name");
      this.input2 = createInput("Password");
      this.input3 = createInput("Email");
      this.checkbox1 = createCheckbox("I am not a robot");
      this.resultName = createElement('h2');
      this.emailShow = createElement('h2');
      this.phoneInput = createInput();
      this.addressL1Input = createInput()
      this.addressL1Result = createElement('h2');
      this.addressL2Input = createInput()
      this.addressL2Result = createElement('h2');
      this.phoneResult = createElement('h2');
      this.cityResult = createElement('h2');
      this.cityInput = createInput();
      this.stateResult = createElement('h2');
      this.stateInput = createInput();
    }

    display()
    {
        this.input1.position(95, 270);
        this.input2.position(95, 300);
        this.input3.position(95, 330)
        this.checkbox1.position(93, 360);
    }

    step2()
    {
      this.resultName.html("Name : " + this.input1.value());
      this.resultName.position(0, 200);
      this.emailShow.html("Email : " + this.input3.value());
      this.emailShow.position(0, 225);
      this.input1.hide();
      this.input2.hide();
      this.input3.hide();
      this.checkbox1.hide();
      nextSpi.x = 1000000;
      this.phoneResult.html("Phone :");
      this.phoneResult.position(0, 250);
      this.phoneInput.position(100, 275);
      this.addressL1Result.html("Address Line 1: ");
      this.addressL1Result.position(0, 275);
      this.addressL1Input.position(175, 300);
      this.addressL2Result.html("Address Line 2: ");
      this.addressL2Result.position(0, 300);
      this.addressL2Input.position(175, 325);
      this.cityResult.html("City : ");
      this.cityResult.position(0, 325);
      this.cityInput.position(100, 350);
      this.stateResult.html("State : ");
      this.stateResult.position(0, 350);
      this.stateInput.position(100, 375);
    }

    hide()
    {
      this.input1.hide();
      this.input2.hide();
      this.input3.hide();
      this.checkbox1.hide();
    }
}