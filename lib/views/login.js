/* eslint-disable max-len */
module.exports = `
<noscript class="excludedBG purifiedBG">You need to enable JavaScript to run this app.</noscript>
    <div id="root" class="desktop excludedBG purifiedBG">
      <div class="sc-jmNpzm jjAMGT excludedBG purifiedBG">
        <div class="sc-dUWWNf sc-jtcaXd kSPgzq fYdAIW excludedBG purifiedBG">
          <div id="group" class="MuiToggleButtonGroup-root css-1gjgmky-MuiToggleButtonGroup-root" aria-label="Platform" style="position: absolute; transform: translateY(-100%); height: 50px; width: 100%;">
            <button style="width: 50%; border-radius: 10px;" id="RootAcc" class="MuiButtonBase-root MuiToggleButton-root Mui-selected MuiToggleButton-sizeMedium MuiToggleButton-primary MuiToggleButtonGroup-grouped MuiToggleButtonGroup-groupedHorizontal css-d9c359-MuiButtonBase-root-MuiToggleButton-root" tabindex="0" type="button" value="Root" aria-pressed="true">
              Root User
              <span class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span>
            </button>
            
            <button style="width: 50%; border-radius: 10px;" id="UserAcc" class="MuiButtonBase-root MuiToggleButton-root MuiToggleButton-sizeMedium MuiToggleButton-primary MuiToggleButtonGroup-grouped MuiToggleButtonGroup-groupedHorizontal css-d9c359-MuiButtonBase-root-MuiToggleButton-root" tabindex="0" type="button" value="User" aria-pressed="false">
              API User
              <span class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span>
            </button>
          </div>
          <img src="/img/logo.png" alt="3Edges" width="171" height="160" style="margin-bottom: 30px; margin-top: 10px; cursor: pointer" class="excludedBG purifiedBG a1361728-ae8c-471d-921b-6a49b43c1bd2 purifying" />
          <form class="sc-cLFqLo dGBBAf excludedBG purifiedBG" action="<%= submitUrl %>" method="post" autocomplete="off">
            <input type="hidden" name="prompt" value="login" />

            <div class="MuiFormControl-root MuiTextField-root sc-efBctP eSKtxV excludedBG purifiedBG" data-cy="loginPage_email" style="margin-bottom: 10px; margin-top: 10px">
              <label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined excludedBG purifiedBG" id="LoginLableInputContainer" data-shrink="false">E-mail</label>
              <div class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl excludedBG purifiedBG" id="LoginInputContainer">
                <input aria-invalid="false" name="login" type="text" class="MuiInputBase-input MuiOutlinedInput-input excludedBG purifiedBG" value="" id="login" />
                <fieldset aria-hidden="true" class="PrivateNotchedOutline-root-1 MuiOutlinedInput-notchedOutline excludedBG purifiedBG">
                  <legend class="PrivateNotchedOutline-legendLabelled-3 excludedBG purifiedBG" id="LoginLegend"><span id="LoginSpanLegend" class="excludedBG purifiedBG hiddenSpan">E-mail</span></legend>
                </fieldset>
              </div>
            </div>
            <div class="MuiFormControl-root MuiTextField-root sc-efBctP eSKtxV excludedBG purifiedBG" data-cy="loginPage_password">
              <label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined excludedBG purifiedBG" id="PasswordLableInputContainer" data-shrink="false">Password</label>
              <div class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl excludedBG purifiedBG" id="PasswordInputContainer">
                <input aria-invalid="false" name="password" type="password" class="MuiInputBase-input MuiOutlinedInput-input excludedBG purifiedBG" value="" id="Password" />
                <fieldset aria-hidden="true" class="PrivateNotchedOutline-root-1 MuiOutlinedInput-notchedOutline excludedBG purifiedBG">
                  <legend class="PrivateNotchedOutline-legendLabelled-3 excludedBG purifiedBG" id="PasswordLegend"><span class="excludedBG purifiedBG">Password</span></legend>
                </fieldset>
              </div>
            </div>
            <button class="MuiButtonBase-root MuiButton-root MuiButton-contained sc-crXcEl bnsGGz MuiButton-containedPrimary Mui-disabled excludedBG purifiedBG" id="LoginButton" tabindex="-1" type="submit" disabled="" style="width: 100%; font-weight: bold; color: white; height: 48px; margin: 16px 0px 0px; border-radius: 4px"><span class="MuiButton-label excludedBG purifiedBG">Sign In</span></button>
            <div class="sc-iJkHyd ktlsKL" id="UiBlockUser">
              <h3 class="sc-grVGCS ksPVCf" id="RegisterButton">Register</h3>
              <h3 class="sc-grVGCS ksPVCf" id="ForgotPasswordP">Forgot Password?</h3>
            </div>
          </form>
        </div>
      </div>
      <div class="Toastify excludedBG purifiedBG"></div>
    </div>

    <input id="clientId" type="hidden" name="clientId" value="<%= client.clientId %>" />

    <div role="presentation" class="MuiDialog-root excludedBG purifiedBG" style="display: none; position: fixed; z-index: 1300; inset: 0px" id="presentationDiv">
      <div class="MuiBackdrop-root excludedBG purifiedBG" aria-hidden="true" style="opacity: 1; transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"></div>
      <div tabindex="0" data-test="sentinelStart" class="excludedBG purifiedBG"></div>
      <div class="MuiDialog-container MuiDialog-scrollPaper excludedBG purifiedBG" id="divClose" role="none presentation" tabindex="-1" style="opacity: 1; transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms">
        <div class="MuiPaper-root MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthSm MuiPaper-elevation24 MuiPaper-rounded excludedBG purifiedBG" role="dialog">
          <img src="/img/icon-close.svg" id="ImgClose" data-cy="modal_btnClose" class="sc-bZnhIo bofigo excludedBG purifiedBG excluded purified" />
          <div class="sc-jdAMXn jtgasY excludedBG purifiedBG" style="width: 100%">
            <div class="sc-iTONeN bzSbPL excludedBG purifiedBG">
              <h1 class="excludedBG purifiedBG">Reset your password</h1>

              <div class="MuiFormControl-root MuiTextField-root sc-efBctP jYuKNJ excludedBG purifiedBG">
                <label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined excludedBG purifiedBG" id="ResetPassordLable" data-shrink="false">Fill your e-mail</label>
                <div class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl excludedBG purifiedBG" id="ResetPassordContainer">
                  <input aria-invalid="false" type="email" class="MuiInputBase-input MuiOutlinedInput-input excludedBG purifiedBG" value="" id="ResetPassordInput" />
                  <fieldset aria-hidden="true" class="jss1 MuiOutlinedInput-notchedOutline excludedBG purifiedBG">
                    <legend class="jss3 excludedBG purifiedBG" id="ResetPassordLegend">
                      <span class="excludedBG purifiedBG">Fill your e-mail</span>
                    </legend>
                  </fieldset>
                </div>
              </div>

              <div class="sc-kDDrLX NdedF excludedBG purifiedBG">
                <button class="MuiButtonBase-root MuiButton-root MuiButton-contained sc-crXcEl glNZrf MuiButton-containedPrimary Mui-disabled excludedBG purifiedBG" id="ResetPassordButton" tabindex="-1" type="button" disabled="">
                  <span class="MuiButton-label excludedBG purifiedBG">Reset</span>
                </button>
              </div>
              <div class="excludedBG purifiedBG">
                <div class="excludedBG purifiedBG">
                  <div class="grecaptcha-badge excludedBG purifiedBG" data-style="bottomright" style="width: 256px; height: 60px; display: block; transition: right 0.3s ease 0s; position: fixed; bottom: 14px; right: -186px; box-shadow: gray 0px 0px 5px; border-radius: 2px; overflow: hidden">
                    <div class="grecaptcha-logo excludedBG purifiedBG">
                      <iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LcmeBEbAAAAAO0GvPUCyIs9ow-LFUFiX6UQbU8m&amp;co=aHR0cHM6Ly8zZWRnZXMuaW86NDQz&amp;hl=en-GB&amp;type=image&amp;v=M-QqaF9xk6BpjLH22uHZRhXt&amp;theme=light&amp;size=invisible&amp;badge=bottomright&amp;cb=92qrpkiemtte" width="256" height="60" role="presentation" name="a-malbxq4hk3rl" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox" class="excludedBG purifiedBG"></iframe>
                    </div>
                    <div class="grecaptcha-error excludedBG purifiedBG"></div>
                    <textarea id="g-recaptcha-response-10" name="g-recaptcha-response" class="g-recaptcha-response excludedBG purifiedBG" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none"></textarea>
                  </div>
                  <iframe style="display: none" class="excludedBG purifiedBG"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div tabindex="0" data-test="sentinelEnd" class="excludedBG purifiedBG"></div>
    </div>

    <span class="mobile excludedBG purifiedBG">
      <img src="/3edges/img/logo.png" title="3Edges" width="150" height="150" class="f5ad61c5-b0dd-46b1-8cb3-701502c7a0aa purifying excludedBG purifiedBG" />
      <h3 class="excludedBG purifiedBG">3Edges does not support smartphones at this time.</h3>

      <span class="excludedBG purifiedBG"> Contact us at <a href="mailto:info@3edges.io" class="excludedBG purifiedBG">info@3edges.io</a> if you want to be kept updated </span>
    </span>
    `;

