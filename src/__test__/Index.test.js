describe('InputText test', () => {
  const testPageHTML = `
    <div class="root">
	  root
    </div>
  `;

  // Set up jest document body
  document.body.innerHTML = testPageHTML;

  it('InputText Render Test ', () => {
    const rootEl = document.querySelector('.root');

    const rootText = rootEl.textContent;

    expect(rootText).toMatch('root');
  });
});
