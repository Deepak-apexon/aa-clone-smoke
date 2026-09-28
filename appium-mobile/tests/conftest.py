"""Pytest fixtures for Appium Mobile.

Driver is attached by the workflow executor / MCP session at run time.
This stub keeps the project layout valid for cloning.
"""

import pytest


@pytest.fixture(scope="session")
def driver():
    raise RuntimeError(
        "No Appium driver attached. Run via the Appium Mobile workflow "
        "(executor provides the live driver session)."
    )
