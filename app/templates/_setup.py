# -*- coding: utf-8 -*-

from setuptools import find_packages, setup
from <%= pkg %> import __version__

setup(
    name='<%= pkg %>',
    version=__version__,
    description='<%= desc %>',
    long_description=open('README.rst').read(),
    url='<%= url %>',
    author='<%= user.git.username %>',
    author_email='<%= user.git.email %>',<% if (license != 'None') { %>
    license='<%= license %>',<% } %><% if (setClassifier) { %>
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
    keywords='<%= keywords %>',
    packages=find_packages(exclude=['docs', 'tests*']),
    zip_safe=False,
)
