#!/bin/bash
tsc --target ES2015 --moduleResolution node index.ts
rollup -c
