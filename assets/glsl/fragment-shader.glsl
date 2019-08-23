#version 300 es
// @see https://www.khronos.org/registry/OpenGL-Refpages/es3.0/

precision mediump float; // Set default precision to medium precision float.

/** Varyings */
in vec4 v_Color;

out vec4 v_outColor;

void main() {
    v_outColor = v_Color;
}

