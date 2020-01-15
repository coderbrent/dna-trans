<h1>DNA Transportation</h1>

<p>
  This website is being built for a private business. The client has expressed interest in increasing their search engine ranking to bring in more business online.
</p>
<p>
  That being the case, I decided to develop the site on JAMStack tech - specifically,a statically generated Gatsby/React/GraphQL build deployed to Netlify. 
</p>

<h3>Why?</h3>

<p>
  Since the client is interested in gaining rank on search engines, SEO was naturally a key consideration factor in choosing to roll a site featuring SSR. In addition to the SEO benefits Gatsby's out of the box SSR functionality offers, the site makes extensive use of their pretty-amazing image plugin to dramatically improve load times. Additionally, I selected a modular CSS framework (Bulma) to avoid style bloat, another key performance consideration.
</p>

<h4>Site Features:</h4>
<ul>
  <li>Server Side Rendering</li>
  <li>Google Analytics plugin</li>
  <li>Gatsby-Image plugin</li>
  <li>GraphQL content querying (sourced from client-side JSON files)</li>
</ul>

<h4>TODO:</h4>
<p> 
  Some items that still need work:
</p>
<ul>
  <li>Finish quote form</li>
  <li>Create banners for: Contact, Apply, FAQ pages</li>
  <li>Add client-supplied questions/answers to FAQ page</li>
  <li>Continue to move hard-coded content into JSON files (see content folder)</li>
  <li>Further compress heavier images</li>
  <li>Add social media link/icons to footer</li>
  <li>Specify Bulma component imports to trim down bundle (see mystyles.scss)</li>
  <li>Convert index page content display into map function</li>
</ul>

