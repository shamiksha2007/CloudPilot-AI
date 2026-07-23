import os


def scan_project(path):
    files = []

    for root, directories, filenames in os.walk(path):

        # Include directory names
        for directory in directories:
            files.append(directory)

        # Include file names
        for file in filenames:
            files.append(file)

    return files