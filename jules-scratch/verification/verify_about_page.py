from playwright.sync_api import Page, expect

def test_about_us_page(page: Page):
    """
    This test verifies that the 'About Us' page loads correctly and displays the
    main heading.
    """
    # 1. Arrange: Go to the 'About Us' page.
    page.goto("http://localhost:3000/about")

    # 2. Assert: Check for the main heading.
    # We use get_by_role('heading') to find the <h1> element.
    heading = page.get_by_role("heading", name="About Us")
    expect(heading).to_be_visible()

    # 3. Screenshot: Capture the final result for visual verification.
    page.screenshot(path="jules-scratch/verification/about-us-page.png")

# To run this script, you need to have playwright installed.
# You can install it using pip:
# pip install playwright
# And then install the browsers:
# playwright install
# Finally, you can run the script using pytest or by wrapping it in a main function.
# For simplicity, I will use the playwright codegen tool's approach to run this.

from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    test_about_us_page(page)
    browser.close()