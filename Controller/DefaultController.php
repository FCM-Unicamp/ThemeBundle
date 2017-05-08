<?php

namespace FCM\ThemeBundle\Controller;

use FCM\UserBundle\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class DefaultController extends Controller
{
    /**
     * @Route("/denied")
     */
    public function indexAction()
    {
        /** @var User $user */
        //$user = $this->get('security.context')->getToken()->getUser();


        return $this->render('FCMThemeBundle:Default:denied.html.twig', [
            'page_title' => 'Acesso negado'
        ]);
    }
}
