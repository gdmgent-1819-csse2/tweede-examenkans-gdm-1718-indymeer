#version 300 es
// @see https://www.khronos.org/registry/OpenGL-Refpages/es3.0/

/** Attributes */
in vec4 a_VertexPosition;
in vec4 a_VertexColor;

/** Varyings */
out vec4 v_Color;

void main() {
    gl_Position = a_VertexPosition; // @see https://www.khronos.org/registry/OpenGL-Refpages/es3.0/html/gl_Position.xhtml
    gl_PointSize = 5.0;             // @see https://www.khronos.org/registry/OpenGL-Refpages/es3.0/html/gl_PointSize.xhtml
    v_Color = a_VertexColor;
}
