import pytest
from base_page import BasePage


@pytest.mark.order(1)
def test_placeholder_smoke(driver):
    """Placeholder smoke test for brownfield clone scaffold (not a real TC)."""
    page = BasePage(driver)
    assert page.driver is not None
