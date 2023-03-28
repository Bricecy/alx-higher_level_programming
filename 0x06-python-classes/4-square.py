#!/usr/bin/python3
"""Square generation module for Python project 0x06
"""


class Square:
    """Class defined for square generation.
    Args:
        size (int): length of one side of square
    Attributes:
        __size (int): length of one side of square
    """

    def __init__(self, size=0):
        # attribute assigment here engages setters defined below
        self.size = size
