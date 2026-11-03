import {useModal} from '../../../shared';
import {ApplyDialog} from '../components/dialogs/ApplyDialog';
import {FaqDialog} from '../components/dialogs/FaqDialog';
import {LoginDialog} from '../components/dialogs/LoginDialog';

// Apply, login and FAQ dialogs are opened from the header, footer and home sections alike.
export function useMembershipDialogs() {
    const modal = useModal();
    return {
        openApply: () => modal.open(<ApplyDialog />),
        openLogin: () => modal.open(<LoginDialog />),
        openFaq: () => modal.open(<FaqDialog />)
    };
}
