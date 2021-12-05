const WorkspaceAnimation = imports.ui.workspaceAnimation;
let originalAnimateSwitch = null;

/**
 * Disables the workspace animations and by this weird gittering when
 * switching between panes and when the focus on a monitor switch happens
 */
function enable() {
    originalAnimateSwitch = WorkspaceAnimation.WorkspaceAnimationController.prototype.animateSwitch;

    WorkspaceAnimation.WorkspaceAnimationController.prototype.animateSwitch = function (
        _,
        _,
        _,
        complete
    ) {
        complete();
    };
}

/**
 * Re-enables the workspace animations
 */
function disable() {
    WorkspaceAnimation.WorkspaceAnimationController.prototyp.animateSwitch = originalAnimateSwitch;
}
