/**
 * $LIBRA - Custom Cursor
 * Island vibes with smooth gold coin cursor
 */

(function() {
    'use strict';

    const CONFIG = {
        cursorLerp: 0.15,
        glowLerp: 0.08,
    };

    const state = {
        mouse: { x: 0, y: 0 },
        cursor: { x: 0, y: 0 },
        glow: { x: 0, y: 0 },
        isVisible: false,
        rafId: null,
    };

    let cursorEl = null;
    let glowEl = null;

    function lerp(start, end, factor) {
        return start + (end - start) * factor;
    }

    function isTouchDevice() {
        return (
            'ontouchstart' in window ||
            navigator.maxTouchPoints > 0 ||
            window.matchMedia('(hover: none)').matches
        );
    }

    function updateCursor() {
        state.cursor.x = lerp(state.cursor.x, state.mouse.x, CONFIG.cursorLerp);
        state.cursor.y = lerp(state.cursor.y, state.mouse.y, CONFIG.cursorLerp);
        state.glow.x = lerp(state.glow.x, state.mouse.x, CONFIG.glowLerp);
        state.glow.y = lerp(state.glow.y, state.mouse.y, CONFIG.glowLerp);

        if (cursorEl) {
            cursorEl.style.left = `${state.cursor.x}px`;
            cursorEl.style.top = `${state.cursor.y}px`;
        }
        if (glowEl) {
            glowEl.style.left = `${state.glow.x}px`;
            glowEl.style.top = `${state.glow.y}px`;
        }

        state.rafId = requestAnimationFrame(updateCursor);
    }

    function onMouseMove(e) {
        state.mouse.x = e.clientX;
        state.mouse.y = e.clientY;

        if (!state.isVisible) {
            state.isVisible = true;
            state.cursor.x = state.mouse.x;
            state.cursor.y = state.mouse.y;
            state.glow.x = state.mouse.x;
            state.glow.y = state.mouse.y;
            if (cursorEl) cursorEl.classList.add('visible');
            if (glowEl) glowEl.classList.add('visible');
        }
    }

    function onMouseDown() {
        if (cursorEl) cursorEl.classList.add('active');
    }

    function onMouseUp() {
        if (cursorEl) cursorEl.classList.remove('active');
    }

    function onMouseLeave() {
        state.isVisible = false;
        if (cursorEl) cursorEl.classList.remove('visible');
        if (glowEl) glowEl.classList.remove('visible');
    }

    function init() {
        if (isTouchDevice()) return;

        cursorEl = document.getElementById('cursor');
        glowEl = document.getElementById('cursor-glow');

        if (!cursorEl) return;

        document.addEventListener('mousemove', onMouseMove, { passive: true });
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mouseleave', onMouseLeave);

        state.rafId = requestAnimationFrame(updateCursor);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
