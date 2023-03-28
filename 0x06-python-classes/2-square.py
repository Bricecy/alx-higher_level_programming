#!/usr/bin/python3
"""Square generation module for python project 6
"""


class Square:
    """class definition for square generation
    """

    def __init__(self, size=0):
        if type(size) is not int:
            raise TypeError('size must be an integer')
        if size < 0:
            raise ValueError('size must be >= 0')
        self.__size = size
