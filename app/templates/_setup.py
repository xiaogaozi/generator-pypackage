# -*- coding: utf-8 -*-

from setuptools import find_packages, setup
from <%= pkg %> import __version__

setup(
    name='<%= pkg %>',
    version=__version__,
    url='<%= url %>',<% if (license != 'None') { %>
    license='<%= license %>',<% } %>
    description='<%= desc %>',
    long_description=open('README.md').read(),
    author='<%= user.git.username %>',
    author_email='<%= user.git.email %>',
    packages=find_packages(exclude=['tests']),
    package_data={'<%= pkg %>': ['CHANGES', 'README.md']},
    zip_safe=False,
)
