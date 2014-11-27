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
    zip_safe=False,<% if (setClassifier) { %>
    classifier=[<% _.each(classifierDevelopmentStatus, function(o) { %>
        '<%= o %>',<% }); %><% _.each(classifierEnvironment, function(o) { %>
        '<%= o %>',<% }); %><% _.each(classifierFramework, function(o) { %>
        '<%= o %>',<% }); %><% _.each(classifierIntendedAudience, function(o) { %>
        '<%= o %>',<% }); %><% _.each(classifierLicense, function(o) { %>
        '<%= o %>',<% }); %><% _.each(classifierNaturalLanguage, function(o) { %>
        '<%= o %>',<% }); %><% _.each(classifierOperatingSystem, function(o) { %>
        '<%= o %>',<% }); %><% _.each(classifierProgrammingLanguage, function(o) { %>
        '<%= o %>',<% }); %><% _.each(classifierTopic, function(o) { %>
        '<%= o %>',<% }); %>
    ],<% } %>
)
