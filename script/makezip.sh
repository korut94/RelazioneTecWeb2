#!/bin/bash

#Author: Andrea Mantovani
#License: MIT

OUTPUT_NAME="relazione"

mkdir ${OUTPUT_NAME}/; \
    mkdir ${OUTPUT_NAME}/Immagini; \
    cp res/img/* ${OUTPUT_NAME}/Immagini/; \
    cp ${OUTPUT_NAME}.pdf ${OUTPUT_NAME}/Relazione.pdf; \
    zip -r ${OUTPUT_NAME}.zip ${OUTPUT_NAME}/* \
    rm -r ${OUTPUT_NAME}
