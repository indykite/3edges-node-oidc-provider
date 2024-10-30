module.exports = `
<noscript class="excludedBG purifiedBG">You need to enable JavaScript to run this app.</noscript>
<div class="jjAMGT">
   <div width="460px" class="kSPgzq iwQAHH">
      <img src="/img/logo.png" alt="3Edges" width="auto" height="160" style="margin-bottom: 30px; cursor: pointer;">
      <form class="cORoZl" style="text-align: center;" autocomplete="off" action="<%= submitUrl %>" method="post">
        <input type="hidden" name="prompt" value="consent"/>
        <p class="lbWjUG" style="margin-bottom: 0px; margin-top: 0px;">Third Party Client</p>
        <p class="kiHCpR" style="margin-top: 0px;">whants access to your account</p>
        <p class="kiHCpR" style="margin-bottom: 8px;">The following permissions are requested by the above app. Please review these and consent if it is OK.</p>
        <ul class="haPhTe" style="text-align: left;">
            <% missingOIDCScope = new Set(details.missingOIDCScope); missingOIDCScope.delete('openid'); missingOIDCScope.delete('offline_access') %>
            <% if (missingOIDCScope.size) { %>
              <% missingOIDCScope.forEach((scope) => { %>
                <% let scopeUp = scope.charAt(0).toUpperCase() + scope.slice(1) %>
                <li class="kvfgsf"><%= scopeUp %></li>
              <% }) %>
            <% } %>
            <% if (params.scope && params.scope.includes('offline_access')) { %>
              <li class="kvfgsf">
              Maintain access to data you have given it access to
                <% if ((!details.missingOIDCScope) || !details.missingOIDCScope.includes('offline_access')) { %>
                  (which you've previously granted)
                <% } %>
              </li>
            <% } %>
        </ul>
        <button autofocus type="submit" class="MuiButtonBase-root MuiButton-root MuiButton-text  hSYzXj" tabindex="0"><span class="MuiButton-label">Submit Consent</span><span class="MuiTouchRipple-root"></span></button>
        <button class="MuiButtonBase-root MuiButton-root MuiButton-text sc-gYMRRK eSMNkf" tabindex="0" id="cancel" type="button"><span class="MuiButton-label">Cancel</span><span class="MuiTouchRipple-root"></span></button>
      </form>
      <input type="hidden" id="abortUrl" name="prompt" value="<%= abortUrl %>"/>
   </div>
</div>
`;
